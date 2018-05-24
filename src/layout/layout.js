import {
  LayoutModel
} from 'layout-model'

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

    this.mapComponents = this.layoutDefinition
  }

  compute () {
    Utils.removeDiv(LAYOUT_NAME)
    Utils.checkComponent(this.mapComponents, this.layoutDef)
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
    // Utils.drawComponents(this.layoutDef)
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
   * @param  {Object} config - node configuration to change.
   */
  updateNode (config) {
    this.tree.updateNode(config)
    this.layoutDefinition = this.tree.model
    this.compute()
  }

  /**
   * function to delete a node from the layout and rerender the layout
   * @param  {String} nodeId - node id to delete
   */
  deleteNode (nodeID) {
    Utils.removeDiv('fusionBoardLayout')
    this.tree.delete(nodeID)
    this.exportLayoutDefinition(nodeID)
    let component = this.nodeLayoutConfig
    component = JSON.parse(component)
    console.log('component ID: ', component)
    if (component.host === null) {
      component.lanes.forEach((comp) => {
        if (comp.host === null) {
          this.searchComponent(comp)
        } else {
          this.layoutDef.deleteComponent(comp.host)
        }
      })
    } else {
      this.layoutDef.deleteComponent(component.host)
    }
    this.nodeLayoutConfig = null
    // this.layoutDefinition = this.tree.model
    this.layoutDefinition = this.layoutDef.rawConfig(this.tree.model)
    this.compute()
  }

  // Recursive function to iterate dummy componrnt to delete them
  searchComponent (component) {
    component.lanes.forEach((comp) => {
      if (comp.host === null) {
        this.searchComponent(comp)
      } else {
        this.layoutDef.deleteComponent(comp.host)
      }
    })
  }

  /**
   * function to delete a node from the layout and rerender the layout
   * @param  {Object} nodeId - node id to delete
   * @param  {Object} nodeArray - Node Array to be Added
   */
  addNode (nodeId, nodeArray) {
    Utils.removeDiv('fusionBoardLayout')
    // Utils.checkComponent(nodeArray, this.layoutDef)
    this.mapComponents = nodeArray
    this.tree.addNode(nodeId, nodeArray)
    this.layoutDefinition = this.tree.model
    this.compute()
  }

  /**
   * function to add the layout definition of the tree.
   * @param  {String} nodeID - node Id of the selected node.
   */
  exportLayoutDefinition (nodeID) {
    this.nodeLayoutConfig = null
    if (this.tree._id === nodeID) {
      let treeModel = JSON.parse(JSON.stringify(this.tree.model))
      // let treeModel = Utils.deepCopyObject(this.tree.model)
      this.nodeLayoutConfig = (JSON.stringify(this.layoutDef.rawConfig(treeModel)))
    } else {
      this.tree.children.forEach((node) => {
        if (node._id === nodeID) {
          let treeModel = JSON.parse(JSON.stringify(node.model))
          // let treeModel = Utils.deepCopyObject(node.model)
          this.nodeLayoutConfig = (JSON.stringify(this.layoutDef.rawConfig(treeModel)))
        } else {
          this.searchNode(node, nodeID)
        }
      })
    }
    return this.nodeLayoutConfig
  }

  // Recursive function to search a node to export Layout Definition.
  searchNode (node, nodeID) {
    node.children.forEach((node1) => {
      if (node1._id === nodeID) {
        let treeModel = JSON.parse(JSON.stringify(node1.model))
        // let treeModel = Utils.deepCopyObject(node1.model)
        this.nodeLayoutConfig = (JSON.stringify(this.layoutDef.rawConfig(treeModel)))
      } else {
        this.searchNode(node1, nodeID)
      }
    })
  }

  /**
   * function to get the node info.
   * @param  {String} nodeID - node ID.
   */
  getNode (nodeID) {
    let nodeInfo = this.tree.getNode(nodeID)
    return nodeInfo
  }

  /**
   * Function to add placeHolder to the layout
   */
  // addPlaceHolder () {
  //   if (this.tree.children.length === 0 && this.tree.model.host !== null) {
  //     if (document.getElementById(`placeholder${this.tree._id}`) !== null) { document.getElementById(`placeholder${this.tree._id}`).remove() }
  //     let dummyElem = this.tree.model.host
  //     let doc = document.getElementById(this.tree._id)
  //     let div = document.createElement('div')
  //     div.setAttribute('id', `placeholder${this.tree._id}`)
  //     let width = dummyElem.newDimensions.width
  //     let height = dummyElem.newDimensions.height
  //     div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //     div.style.width = `${width}px`
  //     div.style.height = `${height}px`
  //     div.style.backgroundSize = `${width}px ${height}px`
  //     doc.appendChild(div)
  //   } else {
  //     this.tree.children.forEach((node) => {
  //       if (node.children.length === 0 && node.model.host !== null) {
  //         if (document.getElementById(`placeholder${node._id}`) !== null) { document.getElementById(`placeholder${node._id}`).remove() }
  //         let dummyElem = node.model.host
  //         let doc = document.getElementById(node._id)
  //         let div = document.createElement('div')
  //         div.setAttribute('id', `placeholder${node._id}`)
  //         let width = dummyElem.newDimensions.width
  //         let height = dummyElem.newDimensions.height
  //         div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //         div.style.width = `${width}px`
  //         div.style.height = `${height}px`
  //         div.style.backgroundSize = `${width}px ${height}px`
  //         doc.appendChild(div)
  //       } else {
  //         this.searchPlaceholderNode(node)
  //       }
  //     })
  //   }
  // }

  // // Recursive function to search a node to add placeholder
  // searchPlaceholderNode (node) {
  //   node.children.forEach((node1) => {
  //     if (node1.children.length === 0 && node1.model.host !== null) {
  //       if (document.getElementById(`placeholder${node1._id}`) !== null) { document.getElementById(`placeholder${node1._id}`).remove() }
  //       let dummyElem = node1.model.host
  //       let doc = document.getElementById(node1._id)
  //       let div = document.createElement('div')
  //       div.setAttribute('id', `placeholder${node1._id}`)
  //       let width = dummyElem.newDimensions.width
  //       let height = dummyElem.newDimensions.height
  //       div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
  //       div.style.width = `${width}px`
  //       div.style.height = `${height}px`
  //       div.style.backgroundSize = `${width}px ${height}px`
  //       doc.appendChild(div)
  //     } else {
  //       this.searchPlaceholderNode(node1)
  //     }
  //   })
  // }
}

export default Layout
