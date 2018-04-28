import { SVGDataAdapter } from '../data-adapters/svg-data'
import { Utils } from '../utils/utils'
import { Renderer } from './renderer'

export class SVGRenderer extends Renderer {
  constructor (data) {
    super()
    this.data = data
    this.coordinates = new SVGDataAdapter(this.data).getCoordinates()
  }

  createhtml (id) {
    let mainDiv = document.getElementById(id)
    super.initRenderer(mainDiv, this.data) // Initialise node with layout id
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let container = Utils.findContainer(this.coordinates)
    this.setSVGNodeAttributes(
      svg,
      {
        'x': container.left,
        'y': container.top,
        'height': container.height,
        'width': container.width,
        'id': container._id
      })
    // svg.style.fill = '#e3e3e3'
    // svg.style.border = '1px dotted red'
    this.coordinates.forEach(node => {
      if (node.parent !== null) { svg.appendChild(this.createAndPositionSVG(node)) }
    })
    mainDiv.appendChild(svg)
  }

  createAndPositionSVG (node) {
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    this.setSVGNodeAttributes(
      rect,
      {
        'x': node.left,
        'y': node.top,
        'height': node.height,
        'width': node.width,
        'id': node._id
      })
    // rect.style.border = '1px dotted red'
    // Utils.hoverHandler(rect)
    return rect
  }

  setSVGNodeAttributes (ele, node) {
    ele.setAttributeNS(null, 'id', node.id)
    ele.setAttributeNS(null, 'x', node.x)
    ele.setAttributeNS(null, 'y', node.y)
    ele.setAttributeNS(null, 'height', node.height)
    ele.setAttributeNS(null, 'width', node.width)
  }
}
