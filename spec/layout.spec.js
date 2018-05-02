/* eslint no-undef: "off" */
import Layout from '../src/layout/layout'
import {
  renderAt,
  layoutDefinition,
  width,
  height,
  skeletonType
} from './test-conf'
import { expect } from 'chai'

describe('Testing Layout', () => {
  let layout

  beforeEach(function () {
    this.jsdom = require('jsdom-global')('<div id="board"/>')
    layout = new Layout({
      renderAt,
      layoutDefinition,
      width,
      height,
      skeletonType
    })
    layout.compute()
  })
  context(`Testing layout instance properties`, () => {
    it('check if layout model created', () => {
      expect(
        layout._layout !== undefined
      ).to.equals(true)
    })
    it('check if highLighter is created', () => {
      expect(
        layout.highlighter !== undefined
      ).to.equals(true)
    })
    it('check if tree is created', () => {
      expect(
        layout.tree !== undefined
      ).to.equals(true)
    })
    it('check if controller is created', () => {
      expect(
        layout.con !== undefined
      ).to.equals(true)
    })
  })
  context('Testing Higlight and Unhighlight', () => {
    it('check if hightLight overlay created', () => {
      let hightLightText = 'Hello'
      layout.highlight('node-33', hightLightText)
      expect(
        document.querySelectorAll('span').length !== 0).to.equals(true)
    })
    it('check if hightLight overlay removed', () => {
      layout.unHighlight()
      expect(
        document.querySelectorAll('span').length === 0).to.equals(true)
    })
  })
})
