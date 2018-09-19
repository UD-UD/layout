
import { HTMLRenderer } from '../renderers/html-renderer'
import { Utils } from '../utils/utils'
export class DrawingManager {
  constructor (data, renderer, container) {
    this.data = data
    this.renderer = renderer
    global.__renderer = renderer // TODO change global into diff place
    this.renderer_id = !Utils.isDOMElement(container) ? container : Utils.getID(container)
  }

  _drawLayout () {
    switch (this.renderer) {
      case 'html' :
        this.renderHTML()
        break
    }
  }

  _drawComponent (componentData) {
    componentData.children.forEach(node => {
      let componentHolder = document.getElementById(node._id)
      if (node.model && node.model.host) {
        node.model.host.component.mount(componentHolder)
      }
      this._drawComponent(node)
    })
  }

  draw () {
    this._drawLayout()
    this._drawComponent(this.data)
  }

  renderHTML () {
    let renderer = new HTMLRenderer(this.data)
    renderer.createhtml(this.renderer_id)
  }

  customiseNode (node, borderColor, borderWidth) {
    if (Utils.isDOMElement(node)) {
      Utils.highLightNode(node, borderColor, borderWidth)
    } else {
      Utils.highLightNode(document.getElementById(node), borderColor, borderWidth)
    }
  }

  resetNode (container) {
    Utils.unHighLightNode(Utils.isDOMElement(container) ? container
      : document.getElementById(container))
  }
}
