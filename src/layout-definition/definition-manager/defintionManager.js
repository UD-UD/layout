import DefinitionModel from './definitionModel'

export default class DefinitionManager {
  constructor (componentMap, totalHeight, totalWidth) {
    this.componentMap = componentMap
    this.totalHeight = totalHeight
    this.totalWidth = totalWidth
  }

  // prepares the targetComponent Map for target Mapping ie. where a component should lie
  _prepareTargetComponentMap () {
    this.targetComponentMap = new Map()
    this.componentMap.forEach((value, key) => {
      if (this.targetComponentMap.has(value.target)) {
        this.targetComponentMap.get(value.target).push(value)
      } else {
        let temp = []
        temp.push(value)
        this.targetComponentMap.set(value.target, temp)
      }
    })
  }

  // create the config model
  generateConfigModel () {
    this._prepareTargetComponentMap()
    let canvasComponent = this.targetComponentMap.get('canvas')
    let definitionModel = new DefinitionModel()
    let tempDefModel = definitionModel
    definitionModel._remainingHeight = this.totalHeight
    definitionModel._remainingWidth = this.totalWidth

    let componentRef = null

    // insert title
    componentRef = this._getComponent(canvasComponent, 'title')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)

    // insert Subtitle
    componentRef = this._getComponent(canvasComponent, 'subtitle')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)

    // insert color legend
    componentRef = this._getComponent(canvasComponent, 'colorLegend')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)

    // insert shape legend
    componentRef = this._getComponent(canvasComponent, 'shapeLegend')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)

    // insert size legend
    componentRef = this._getComponent(canvasComponent, 'sizeLegend')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)

    // insert chart
    componentRef = this._getComponent(canvasComponent, 'chart')
    tempDefModel = this._placeComponent(tempDefModel, componentRef)
    console.log(tempDefModel)
    return definitionModel
  }

  _getComponent (canvasComponent, componentName) {
    let comp = canvasComponent.find((component) => component.componentName === componentName)
    return comp !== -1 ? comp : null
  }

  /**
   * @TODO : provide %age support
   * @TODO : provide support for nested placement such as logo in a title
   *
   * @param {DefinitionModel} definitionModel
   * @param {LayoutComponent} component
   */
  _placeComponent (definitionModel, component) {
    if (component == null) {
      return definitionModel
    }
    let componentDimension = component.getLogicalSpace()
    let componentHeight = componentDimension.height
    let componentWidth = componentDimension.width
    let cut = ''
    let componentRatioWidth = 1
    let leftOvercomponentRationWidth = 1
    let leftHeight = 0
    let leftWidth = 0
    if (component.position === 'top' || component.position === 'bottom') {
      cut = 'h'
      componentRatioWidth = componentHeight / definitionModel._remainingHeight
      leftHeight = definitionModel._remainingHeight - componentHeight
      leftWidth = definitionModel._remainingWidth
    } else {
      cut = 'v'
      componentRatioWidth = componentWidth / definitionModel._remainingWidth
      leftWidth = definitionModel._remainingHeight - componentWidth
      leftHeight = definitionModel._remainingHeight
    }
    leftOvercomponentRationWidth = 1 - componentRatioWidth

    // update parentModel
    definitionModel.cut = cut

    let firstLane = new DefinitionModel(component.componentName, null, componentRatioWidth, false, [])
    firstLane._remainingHeight = componentHeight
    firstLane._remainingWidth = componentWidth
    let secondLane = new DefinitionModel(null, null, leftOvercomponentRationWidth, true, [])
    secondLane._remainingHeight = leftHeight
    secondLane._remainingWidth = leftWidth

    if (component.position === 'top' || component.position === 'left') {
      definitionModel.lanes = [firstLane, secondLane]
    } else {
      definitionModel.lanes = [secondLane, firstLane]
    }
    return secondLane
  }
}
