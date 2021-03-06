import { DummyComponent } from 'layout-model'

const width = 600
const height = 600
const skeletonType = 'html'

const component1 = new DummyComponent(10, {
  width: width / 2,
  height: width / 2
})

const component2 = new DummyComponent(10, {
  width: width / 2,
  height: width / 2
})

const component3 = new DummyComponent(10, {
  width: width / 2,
  height: width / 2
})

const component4 = new DummyComponent(10, {
  width: width / 2,
  height: width / 2
})

const layoutDefinition = {
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
        host: 'component1',
        cut: null,
        ratioWeight: 1,
        preferred: true,
        lanes: []
      },
      {
        host: 'component2',
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
        host: 'component3',
        cut: null,
        ratioWeight: 1,
        lanes: []
      },
      {
        host: 'component4',
        cut: null,
        ratioWeight: 1,
        preferred: true,
        lanes: []
      }
    ]
  }
  ]
}

const renderAt = 'board'

export {
  renderAt,
  layoutDefinition,
  width,
  height,
  skeletonType,
  component1,
  component2,
  component3,
  component4
}

// layoutDef () {
//   let layoutDef = new LayoutDef(conf.layoutDefinition)
//   layoutDef.addMultipleComponent([
//     { id: 'component1', component: conf.component1 },
//     { id: 'component2', component: conf.component2 },
//     { id: 'component3', component: conf.component3 },
//     { id: 'component4', component: conf.component4 }
//   ])
//   layoutDef.compute()
// }

// import * as conf from '../../spec/test-conf-1'
