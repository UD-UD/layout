import Layout from '../layout/src/layout/layout'
import { Controller } from './controller/controller'
import Component from '../layout/src/utils/DummyComponent'

const width = 600

const height = 600
const component1 = new Component(10, {
  width: width / 2,
  height: width / 2
})

const component2 = new Component(10, {
  width: width / 2,
  height: width / 2
})

const component3 = new Component(10, {
  width: width / 2,
  height: width / 2
})

const component4 = new Component(10, {
  width: width / 2,
  height: width / 2
})

const config = {
  host: null,
  cut: 'v',
  ratioWeight: 1,
  lanes: [{
    host: null,
    cut: 'h',
    ratioWeight: 1,
    preferred: true,
    lanes: [
      {
        host: component1,
        cut: null,
        ratioWeight: 1,
        preferred: true,
        lanes: []
      },
      {
        host: component2,
        cut: null,
        ratioWeight: 1,
        lanes: []
      }
    ]
  },
  {
    host: null,
    cut: 'h',
    ratioWeight: 1,
    lanes: [
      {
        host: component3,
        cut: null,
        ratioWeight: 1,
        lanes: []
      },
      {
        host: component4,
        cut: null,
        ratioWeight: 1,
        preferred: true,
        lanes: []
      }
    ]
  }
  ]
}

let layout = new Layout({
  width, height
}, config)

var root = layout.negotiate().tree()

let con = new Controller(root, 'html', 'board')
con.render()
