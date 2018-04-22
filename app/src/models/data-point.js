
export class DataPoint {
  constructor (boundBox, _id) {
    this.top = boundBox.top
    this.left = boundBox.left
    this.width = boundBox.width
    this.height = boundBox.height
    this._id = _id
  }
}
