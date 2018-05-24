/* eslint no-undef: "off" */
import { DEFAULT_BORDER_COLOR, DEFAULT_BORDER_WIDTH, DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../constants/defaults'

class PlaceholderComponent {
  constructor (seed, dimensions) {
    this.seed = seed
    this.dimensions = dimensions
    this.position = null
    this.renderAt = null
    this.type = 'placeholder'
  }

  getLogicalSpace () {
    return {
      width: this.dimensions.width - (2 * this.seed),
      height: this.dimensions.height - (2 * this.seed)
    }
  }

  setSpatialConfig (conf) {
    this.position = {
      top: conf.y,
      left: conf.x
    }
    this.newDimensions = {
      width: conf.width,
      height: conf.height
    }
    this.renderAt = conf.renderAt
  }

  /* istanbul ignore next */

  draw () {
    // if (document.getElementById(`placeholder${this.renderAt}`) !== null) { document.getElementById(`placeholder${this.renderAt}`).remove() }
    // if (document.getElementById(`component${this.renderAt}`) !== null) { document.getElementById(`component${this.renderAt}`).remove() }
    // let doc = document.getElementById(this.renderAt)
    // let div = document.createElement('div')
    // let width = Math.max(this.dimensions.width, this.newDimensions.width)
    // let height = Math.max(this.dimensions.height, this.newDimensions.height)
    // div.setAttribute('id', `component${this.renderAt}`)
    // div.style.backgroundColor = '#fab1a0' // getColor();
    // div.style.width = `${width - (this.seed * 2)}px`
    // div.style.height = `${height - (this.seed * 2)}px`
    // doc.appendChild(div)

    if (document.getElementById(`placeholder${this.renderAt}`) !== null) { document.getElementById(`placeholder${this.renderAt}`).remove() }
    let doc = document.getElementById(this.renderAt)
    let div = document.createElement('div')
    div.setAttribute('id', `placeholder${this.renderAt}`)
    let width = this.newDimensions.width
    let height = this.newDimensions.height
    div.style.backgroundImage = "url('http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png')"
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    div.style.backgroundSize = `${width}px ${height}px`
    doc.appendChild(div)
  }
}

export class Utils {
  static onHover (event) {
    this.highLightNode(event.target, DEFAULT_BORDER_COLOR, DEFAULT_BORDER_WIDTH)
  }

  static offHover (event) {
    this.unHighLightNode(event.target)
  }

  static htmlHover (node, color, width) {
    color = color !== undefined ? color : DEFAULT_BORDER_COLOR
    width = width !== undefined ? width : DEFAULT_BORDER_WIDTH
    node.style.outline = `${color} solid ${width}`
  }

  static htmlUnHover (node) {
    node.style.outline = ''
  }

  static highLightNode (node, color, width) {
    let renderer = global.__renderer

    switch (renderer) {
      case 'html' :
        this.htmlHover(node, color, width)
        break
    }
  }

  static unHighLightNode (node) {
    let renderer = global.__renderer
    switch (renderer) {
      case 'html' :
        this.htmlUnHover(node)
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

  static findContainer (data) {
    return data.filter(coordinate => { return coordinate.parent == null })[0]
  }

  /**
   * static method to remove the div
   * @param  {} divId - div ID to be removed.
   */
  static removeDiv (divId) {
    if (document.getElementById(divId) !== null) { document.getElementById(divId).remove() }
  }

  /**
   * static method to check if dummy component present or not.
   * @param  {} NodeArray - NodeArray to add new Lanes.
   */
  static checkComponent (nodeComponents, layoutDef) {
    let compMap = layoutDef.getComponentMap()
    let compKeys = compMap.keys()
    if (nodeComponents.constructor === Array) {
      nodeComponents.forEach(element => {
        let flag = true
        while (flag) {
          let key = compKeys.next().value
          if (key === element.host) {
            flag = false
          }
          if (key === undefined) {
            flag = false
            const dummyComponent = new PlaceholderComponent(10, {
              width: DEFAULT_WIDTH / 2,
              height: DEFAULT_HEIGHT / 2
            })
            layoutDef.addComponent(element.host, dummyComponent)
          }
        }
      })
    } else {
      if (nodeComponents.host === null) {
        nodeComponents.lanes.forEach((tempNode) => {
          if (tempNode.host === null) {
            Utils.SearchNode(tempNode.lanes, layoutDef)
          }
        })
      }
    }
  }

  // Recursive function to search a node for adding a new Node
  static SearchNode (nodeComp, layoutDef) {
    nodeComp.forEach((tempNode) => {
      if (tempNode.host === null) {
        Utils.SearchNode(tempNode.lanes)
      } else {
        const dummyComponent = new PlaceholderComponent(10, {
          width: DEFAULT_WIDTH / 2,
          height: DEFAULT_HEIGHT / 2
        })
        layoutDef.addComponent(tempNode.host, dummyComponent)
      }
    })
  }

  /**
   * static method to deep copy objects
   * @param  {} param - object to be deeply copied
   */
  static deepCopyObject (param) {
    let copiedObj, i
    if (typeof param !== 'object') {
      return param
    }
    if (!param) {
      return param
    }
    // copying the array inside an object
    if (Object.prototype.toString.apply(param) === '[object Array]') {
      copiedObj = []
      for (i = 0; i < param.length; i += 1) {
        copiedObj[i] = Utils.deepCopyObject(param[i])
      }
      return copiedObj
    }
    copiedObj = {}
    // rest all kind of keys
    for (i in param) {
      if (param.hasOwnProperty(i)) {
        copiedObj[i] = Utils.deepCopyObject(param[i])
      }
    }
    return copiedObj
  }

  /**
   * static method to place the placeholders.
   * @param  {} layoutDef - Layout definitions
   */
  static drawComponents (layoutDef) {
    let compMap = layoutDef.getComponentMap()
    let compKeys = compMap.keys()
    let compVal = compMap.values()
    let flag = true
    while (flag) {
      let val = compVal.next().value
      let key = compKeys.next().value
      if (key !== undefined) {
        val.draw()
      } else {
        flag = false
      }
    }
  }
}
