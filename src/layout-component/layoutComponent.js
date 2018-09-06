export default class LayoutComponent {
  constructor (seed, dimensions) {
    this.seed = seed
    this.boundBox = {}
    this.boundBox.height = dimensions.height
    this.boundBox.width = dimensions.width
    this.boundBox.top = null
    this.boundBox.left = null
    this.chartComponent = null
    this.renderAt = null
  }

  getLogicalSpace () {
    throw new Error('getLogicalSpace is not defined')
  }

  setSpatialConfig (conf) {
    throw new Error('setSpatialSpace is not defined')
  }

  draw () {
    throw new Error('draw is not defined')
  }
}
