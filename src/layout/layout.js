import {
  LayoutModel
} from '../layout-definition'

import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  LAYOUT_NAME
} from '../constants/defaults'

import Highlighter from '../highlighter/highlighter'
import { Controller } from '../controller/controller'
import { Utils } from '../utils/utils'
import { LayoutDef } from './layout-def'

class Layout {
  constructor (conf) {
    this.renderAt = conf.renderAt
    this.width = conf.width || DEFAULT_WIDTH
    this.height = conf.height || DEFAULT_HEIGHT
    this.skeletonType = conf.skeletonType || 'html'
    this.layoutDefinition = conf.layoutDefinition
    this.layoutDef = new LayoutDef(conf.layoutDefinition)
    if (Utils.isDOMElement(this.renderAt)) {
      this.renderAt._layout = this
    } else {
      document.getElementById(this.renderAt)._layout = this
    }

    this.highlighter = new Highlighter()
  }

  compute () {
    Utils.removeDiv(LAYOUT_NAME)
    this.layoutDefinition = this.layoutDef.getSanitizedDefinition()
    this._layout = new LayoutModel({
      width: this.width,
      height: this.height
    },
    this.layoutDefinition
    )
    this.tree = this._layout.negotiate().tree()
    this._layout.broadcast()
    this.con = new Controller(this.tree, this.skeletonType, this.renderAt)
    this.con.render()
  }

  highlight (nodeId, highlightText) {
    let instance = document.getElementById(nodeId)
    if (instance) {
      this.highlighter.highlight(instance, highlightText)
    }
  }

  unHighlight () {
    this.highlighter.unHighlight()
  }

  addComponent (componentId, component) {
    this.layoutDef.addComponent(componentId, component)
  }

  addMultipleComponent (componentArray) {
    this.layoutDef.addMultipleComponent(componentArray)
  }

  resetNode (node) {
    if (this.con) {
      this.con.resetNode(node)
    }
  }

  /**
   * function to update the node and rerender the layout.
   * @param  {} config - node configuration to change.
   */
  updateNode (config) {
    this.tree.updateNode(config)
    this.layoutDefinition = this.tree.model
    this.compute()
  }
}

export default Layout
