import {
  LayoutModel
} from 'layout-model'

import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT
} from '../constants/defaults'

import Highlighter from '../highlighter/highlighter'
import { Controller } from '../controller/controller'
import { Utils } from '../utils/utils'

class Layout {
  constructor (conf) {
    this.renderAt = conf.renderAt
    this.layoutDefinition = conf.layoutDefinition
    this.width = conf.width || DEFAULT_WIDTH
    this.height = conf.height || DEFAULT_HEIGHT
    this.skeletonType = conf.skeletonType || 'html'

    this._layout = new LayoutModel({
      width: this.width,
      height: this.height
    },
    this.layoutDefinition
    )
    if (Utils.isDOMElement(this.renderAt)) {
      this.renderAt._layout = this
    } else {
      document.getElementById(this.renderAt)._layout = this
    }

    this.highlighter = new Highlighter()
  }

  compute () {
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

  resetNode (node) {
    if (this.con) {
      this.con.resetNode(node)
    }
  }
}

export default Layout
