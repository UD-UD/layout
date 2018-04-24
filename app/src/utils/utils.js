/* eslint no-undef: "off" */
import def from '../constants/defaults'

export class Utils {
  static onHover (event) {
    console.log('Hover', JSON.stringify(def))
    this.highLightNode(event.target, def.DEFAULT_BORDER_COLOR, def.DEFAULT_BORDER_WIDTH)
  }

  static offHover (event) {
    this.unHighLightNode(event.target)
  }

  static htmlHover (node, color, width) {
    color = color !== undefined ? color : def.DEFAULT_BORDER_COLOR
    width = width !== undefined ? width : def.DEFAULT_BORDER_WIDTH
    node.style.outline = `${color} solid ${width}`
  }

  static htmlUnHover (node) {
    node.style.outline = ''
  }

  static SVGHover (node, color, width) {
    console.log('Hover')
    color = color !== undefined ? color : def.DEFAULT_BORDER_COLOR
    width = width !== undefined ? width : def.DEFAULT_BORDER_WIDTH
    node.style.stroke = `${color}`
    node.style.strokeWidth = `${width}`
  }

  static SVGUnhover (node) {
    node.style.stroke = ''
    node.style.strokeWidth = ''
  }

  static highLightNode (node, color, width) {
    let renderer = global.__renderer

    switch (renderer) {
      case 'html' :
        this.htmlHover(node, color, width)
        break
      case 'svg' :
        this.SVGHover(node, color, width)
        break
    }
  }

  static unHighLightNode (node) {
    let renderer = global.__renderer
    switch (renderer) {
      case 'html' :
        this.htmlUnHover(node)
        break
      case 'svg' :
        this.SVGUnhover(node)
        break
    }
  }

  static hoverHandler (container) {
    container.addEventListener('mouseover', this.onHover.bind(this))
    container.addEventListener('mouseleave', this.offHover.bind(this))
  }

  static isDOMElement (element) {
    return element instanceof Element
  }

  static getID (element) {
    return element.id
  }
}
