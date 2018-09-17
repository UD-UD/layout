export default class DefinitionModel {
  constructor () {
    this.host = null
    this.cut = 'h'
    this.ratioWeight = 1
    this.preferred = false
    this.lanes = []
    this._remainingHeight = 0
    this._remainingWidth = 0
  }
  get host () {
    return this._host
  }

  set host (host) {
    this._host = host
    return this
  }
  get cut () {
    return this._cut
  }

  set cut (cut) {
    this._cut = cut
    return this
  }
  get ratioWeight () {
    return this._ratioWeight
  }

  set ratioWeight (ratioWeight) {
    this._ratioWeight = ratioWeight
    return this
  }
  get preferred () {
    return this._preferred
  }

  set preferred (preferred) {
    this._preferred = preferred
    return this
  }
  get lanes () {
    return this._lanes
  }

  set lanes (lanes) {
    this._lanes = lanes
    return this
  }

  set _remainingHeight (h) {
    this.__remainingHeight = h
  }

  get _remainingHeight () {
    return this._remainingHeight
  }

  set _remainingWidth (w) {
    this.__remainingWidth = w
  }

  get _remainingWidth () {
    return this._remainingWidth
  }
}
