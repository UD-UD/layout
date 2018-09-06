/* eslint-disable require-jsdoc */

/* eslint no-undef: "off" */

import LayoutComponent from './layoutComponent'

class DummyComponent extends LayoutComponent {
  constructor (seed, dimensions) {
    super(seed, dimensions)
    this.seed = seed
  }

  getLogicalSpace () {
    return {
      width: this.boundBox.width - (2 * this.seed),
      height: this.boundBox.height - (2 * this.seed)
    }
  }

  setSpatialConfig (conf) {
    this.boundBox.top = conf.y
    this.boundBox.left = conf.x

    this.boundBox.newDimensions = {
      width: conf.width,
      height: conf.height
    }
    this.renderAt = conf.renderAt
  }

  draw () {
    let doc = document.getElementById(this.renderAt)
    let div = document.createElement('div')
    let width = Math.max(this.boundBox.width, this.boundBox.newDimensions.width)
    let height = Math.max(this.boundBox.height, this.boundBox.newDimensions.height)

    div.style.backgroundColor = '#fab1a0' // getColor();

    div.style.width = `${width - (this.seed * 2)}px`
    div.style.height = `${height - (this.seed * 2)}px`

    doc.appendChild(div)
  }
}

export default DummyComponent
