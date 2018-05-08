export class LayoutDef {
  constructor (layoutDefinition) {
    this.componentMap = new Map()
    this.layoutDefinition = layoutDefinition
  }

  addComponent (componentId, component) {
    this.componentMap.set(componentId, component)
  }

  addMultipleComponent (componentArray) {
    componentArray.forEach(comp => {
      this.addComponent(comp.id, comp.component)
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
      hostObj.host = this.componentMap.get(hostObj.host)
    }
  }

  getComponentMap () {
    return this.componentMap
  }
}
