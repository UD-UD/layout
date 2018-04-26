import {
  LayoutModel
} from 'layout-model'

import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT
} from '../constants/defaults'

class Layout {
  constructor (conf) {
    this.renderAt = conf.renderAt
    this.layoutDefinition = conf.layoutDefinition
    this.width = conf.width || DEFAULT_WIDTH
    this.height = conf.height || DEFAULT_HEIGHT
    this.skeletonType = conf.skeletonType || 'html'

    this._layout = new LayoutModel({
      width: this.width,
      height: this.height
    },
    this.layoutDefinition
    )
  }
}

export default Layout
