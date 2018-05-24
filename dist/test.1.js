const {
  Layout,
  DummyComponent
} = layout

const width = 750
const height = 700
const skeletonType = 'html'

// const component1 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

// const component2 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

// const component3 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

// const component4 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

// const component5 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

// const component6 = new DummyComponent(10, {
//   width: width / 2,
//   height: width / 2
// })

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
        // preferred: true,
        lanes: []
      },
      {
        host: 'component2',
        cut: null,
        ratioWeight: 1,
        preferred: true,
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
        preferred: true,
        lanes: []
      },
      {
        host: 'component4',
        cut: null,
        ratioWeight: 1,
        // preferred: true,
        lanes: []
      }
    ]
  }
  ]
}

const renderAt = 'board'

const fancyGridLayout = new Layout({
  renderAt,
  layoutDefinition,
  width,
  height,
  skeletonType
})

// fancyGridLayout.addMultipleComponent([
//   { id: 'component1', component: component1 },
//   { id: 'component2', component: component2 },
//   { id: 'component3', component: component3 },
//   { id: 'component4', component: component4 },
//   { id: 'component5', component: component5 },
//   { id: 'component6', component: component6 }
// ])

fancyGridLayout.compute()

// // draw all components
// component1.draw()
// component2.draw()
// component3.draw()
// component4.draw()
