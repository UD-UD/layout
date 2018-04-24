import { SVGDataAdapter } from '../data-adapters/svg-data'
import { Utils } from '../utils/utils'

export class SVGRenderer {
  constructor (data) {
    this.data = data
    this.coordinates = new SVGDataAdapter(this.data).getCoordinates()
  }

  createhtml (id) {
    let mainDiv = document.getElementById(id)
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let container = this.findContainer()
    this.setSVGNodeAttributes(
      svg,
      {
        'x': container.left,
        'y': container.top,
        'height': container.height,
        'width': container.width,
        'id': container._id
      })
    svg.style.fill = '#e3e3e3'
    svg.style.border = '1px dotted red'
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
    rect.style.border = '1px dotted red'
    Utils.hoverHandler(rect)
    return rect
  }

  findContainer () {
    return this.coordinates.filter(coordinate => { return coordinate.parent == null })[0]
  }

  setSVGNodeAttributes (ele, node) {
    ele.setAttributeNS(null, 'id', node.id)
    ele.setAttributeNS(null, 'x', node.x)
    ele.setAttributeNS(null, 'y', node.y)
    ele.setAttributeNS(null, 'height', node.height)
    ele.setAttributeNS(null, 'width', node.width)
  }
}
