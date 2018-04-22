import { HTMLDataAdapter } from '../data-adapters/html-data'
import { Utils } from '../utils/utils'

export class HTMLRenderer {
  constructor (data) {
    this.data = data
    this.coordinates = new HTMLDataAdapter(this.data).getCoordinates()
  }

  createhtml (id) {
    let mainDiv = document.getElementById(id)
    this.coordinates.forEach(node => {
      mainDiv.appendChild(this.createAndPositionDiv(node))
    })
  }

  createAndPositionDiv (node) {
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = node.left + 'px'
    div.style.top = node.top + 'px'
    div.style.height = node.height + 'px'
    div.style.width = node.width + 'px'
    div.style.border = '1px dotted red'
    div.addEventListener('mouseover', Utils.onHover)
    div.addEventListener('mouseleave', Utils.offHover)
    div.id = node._id
    return div
  }
}
