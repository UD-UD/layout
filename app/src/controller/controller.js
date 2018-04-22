import { HTMLRenderer } from '../renderers/html-renderer'

export class Controller {
  constructor (data, renderer, rendererId) {
    this.data = data
    this.renderer = renderer
    this.renderer_id = rendererId
  }

  render () {
    switch (this.renderer) {
      case 'html' :
        this.renderHTML()
        break
      case 'svg' :
        this.renderSVG()
        break
      case 'canvas' :
        this.renderCANVAS()
        break
    }
  }

  renderHTML () {
    let renderer = new HTMLRenderer(this.data)
    renderer.createhtml(this.renderer_id)
  }
}
