
import { DataPoint } from '../models/data-point'

export class DataParser {
  constructor (data) {
    this.data = data
  }

  defaultDataPointLogic () {
    let nodepoints = []
    this.getnodePoints(this.data, nodepoints)
    return nodepoints
  }

  getnodePoints (node, nodepoints) {
    let datapoint = new DataPoint(node.boundBox, node._id)
    nodepoints.push(datapoint)
    node.children.forEach(child => {
      this.getnodePoints(child, nodepoints)
    })
  }
}
