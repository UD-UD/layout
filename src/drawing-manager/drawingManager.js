
import { HTMLRenderer } from '../renderers/html-renderer'
import { Utils } from '../utils/utils'
export class DrawingManager {
  constructor (data, renderer, container) {
    this.data = data
    this.renderer = renderer
    global.__renderer = renderer // TODO change global into diff place
    this.renderer_id = !Utils.isDOMElement(container) ? container : Utils.getID(container)
  }

  draw () {
    switch (this.renderer) {
      case 'html' :
        this.renderHTML()
        break
    }
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
