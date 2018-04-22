
export class DataPoint {
  constructor (node) {
    this.top = node.boundBox.top
    this.left = node.boundBox.left
    this.width = node.boundBox.width
    this.height = node.boundBox.height
    this._id = node._id
    this.parent = node.parent
  }
}
