const { Layout, DummyComponent } = layout

const width = 600
const height = 600

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

const renderAt = 'board'

const fancyGridLayout = new Layout({
  renderAt,
  layoutDefinition,
  width,
  height
})

fancyGridLayout.compute()

// draw all components

component1.draw()
component2.draw()
component3.draw()
component4.draw()
