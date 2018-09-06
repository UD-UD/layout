export class LayoutDef {
  constructor (layoutDefinition) {
    this.componentMap = new Map()
    this.layoutDefinition = layoutDefinition
  }

  addComponent (component) {
    this.componentMap.set(component.name, component)
  }

  addMultipleComponent (componentArray) {
    componentArray.forEach(comp => {
      this.addComponent(comp.name, comp)
    })
  }

  getSanitizedDefinition () {
    this.sanitizeConfig(this.layoutDefinition)
    return this.layoutDefinition
  }

  sanitizeConfig (hostObj) {
    if (hostObj.lanes && hostObj.lanes.length) {
      hostObj.lanes.forEach(childHost => this.sanitizeConfig(childHost))
    }
    if (hostObj.host != null && typeof (hostObj.host) === 'string') {
      if (this.componentMap.get(hostObj.host) !== undefined) { hostObj.host = this.componentMap.get(hostObj.host) }
    }
  }

  getComponentMap () {
    return this.componentMap
  }
}
