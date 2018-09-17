import DefinitionModel from './definitionModel'

export default class DefinitionManager {
  constructor (componentMap, totalHeight, totalWidth) {
    this.componentMap = componentMap
    this.totalHeight = totalHeight
    this.totalWidth = totalWidth
  }

  // prepares the targetComponent Map for target Mapping ie. where a component should lie
  prepareTargetComponentMap () {
    this.targetComponentMap = new Map()
    this.componentMap.forEach((value, key) => {
      if (this.targetComponentMap.has(key)) {
        this.targetComponentMap.get(key).push(value)
      } else {
        let temp = []
        temp.push(value)
        this.targetComponentMap.set(key, temp)
      }
    })
  }

  // create the config model
  generateConfigModel () {
    let canvasComponent = this.targetComponentMap.get('canvas')
    let definitionModel = new DefinitionModel()
    definitionModel._remainingHeight = this.totalHeight
    definitionModel._remainingWidth = this.totalWidth
    canvasComponent.forEach(component => {
      let c_name = component.componentName
      switch (c_name) {
        case 'title' :
          this.placeComponent(definitionModel, component)
          break
        // list other Cases
      }
    })
  }

  /**
   * @TODO : provide %age support
   *
   * @param {*} definitionModel
   * @param {*} component
   */
  placeComponent (definitionModel, component) {
    let componentDimension = component.getLogicalSpace()
    let componentHeight = componentDimension.height
    let componentWidth = componentDimension.width
    let cut = ''
    if (component.position === 'top' || component.position === 'bottom') {
      cut = 'h'
    } else {
      cut = 'v'
    }
  }
}
