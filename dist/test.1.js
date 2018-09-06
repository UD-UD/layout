const {
  LayoutManager,
  DummyComponent
} = layout

const width = 600
const height = 600
const skeletonType = 'html'

// const component1 = new DummyComponent(0, {
//   width: 150,
//   height: 150
// })

// const component2 = new DummyComponent(0, {
//   width: 150,
//   height: 150
// })

// const component3 = new DummyComponent(0, {
//   width: 150,
//   height: 150
// })

// const component4 = new DummyComponent(0, {
//   width: 150,
//   height: 150
// })

const component1 = {
  getLogicalSpace: () => {
    return { width: 150,
      height: 150}
  },
  mount: (at) => { at.append('<span>This is title</span>') }
}

const component2 = {
  getLogicalSpace: () => {
    return { width: 150,
      height: 150}
  },
  mount: (at) => { at.append('<span>This is one more title</span>') }
}
const component3 = {
  getLogicalSpace: () => {
    return { width: 150,
      height: 150}
  },
  mount: (at) => { at.append('<span>This is again title</span>') }
}
const component4 = {
  getLogicalSpace: () => {
    return { width: 150,
      height: 150}
  },
  mount: (at) => { at.append('<span>This is so many title</span>') }
}

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
    ratioWeight: 2,
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

const renderAt = 'board'

const fancyGridLayout = new LayoutManager({
  renderAt,
  layoutDefinition,
  width,
  height,
  skeletonType
})

fancyGridLayout._createLayoutComponents(
  [
    {name: 'tittle', component: component1},
    {name: 'tittle-a', component: component2},
    {name: 'tittle-b', component: component3},
    {name: 'tittle-c', component: component4}
  ])

// fancyGridLayout.addMultipleComponent([
//   { id: 'component1', component: component1 },
//   { id: 'component2', component: component2 },
//   { id: 'component3', component: component3 },
//   { id: 'component4', component: component4 }
// ])

fancyGridLayout.compute()

// // draw all components
// component1.draw()
// component2.draw()
// component3.draw()
// component4.draw()
