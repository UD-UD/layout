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
      if (this.componentMap.get(hostObj.host) !== undefined) { hostObj.host = this.componentMap.get(hostObj.host) }
    }
  }

  rawConfig (hostObj) {
    let compMap = this.getComponentMap()
    let compKeys = compMap.keys()
    let compVal = compMap.values()
    if (hostObj.lanes && hostObj.lanes.length) {
      delete hostObj._id
      hostObj.lanes.forEach(childHost => this.rawConfig(childHost))
    }
    if (hostObj.host != null && typeof (hostObj.host) !== 'string') {
      let flag = true
      while (flag) {
        let val = compVal.next().value
        let key = compKeys.next().value
        if (val.renderAt === hostObj.host.renderAt) {
          hostObj.host = key
          delete hostObj._id
          flag = false
        }
      }
    }
    return hostObj
  }

  getComponentMap () {
    return this.componentMap
  }
  /**
   * function to delete component from Map
   * @param  {} componentId - Id of the component.
   */
  deleteComponent (componentId) {
    this.componentMap.delete(componentId)
  }
}
