class Highligher {
  constructor () {
    this.overlay = document.createElement('div')
    this.addStyleToOverlay()
    this.overlayContent = document.createElement('div')
    this.addStyleToOverlayContent()
    this.overlay.appendChild(this.overlayContent)
  }

  addStyleToOverlay () {
    let overlayStyle = this.overlay.style
    overlayStyle.backgroundColor = 'rgba(104, 182, 255, 0.35)'
    overlayStyle.position = 'fixed'
    overlayStyle.zIndex = '99999999999999'
    overlayStyle.pointerEvents = 'none'
    overlayStyle.display = 'flex'
    overlayStyle.alignItems = 'center'
    overlayStyle.justifyContent = 'center'
    overlayStyle.borderRadius = '3px'
  }

  addStyleToOverlayContent () {
    let overlayContentStyle = this.overlayContent.style
    overlayContentStyle.backgroundColor = 'rgba(104, 182, 255, 0.9)'
    overlayContentStyle.fontFamily = 'monospace'
    overlayContentStyle.fontSize = '11px'
    overlayContentStyle.padding = '2px 3px'
    overlayContentStyle.borderRadius = '3px'
    overlayContentStyle.color = 'white'
  }

  showOverlay ({
    width = 0,
    height = 0,
    top = 0,
    left = 0
  }, content = '') {
    let overlayStyle = this.overlay.style
    overlayStyle.width = ~~width + 'px'
    overlayStyle.height = ~~height + 'px'
    overlayStyle.top = ~~top + 'px'
    overlayStyle.left = ~~left + 'px'
    if (content) {
      this.overlayContent.innerHTML = content
    }

    document.body.appendChild(this.overlay)
  }

  highlight (instance, highlightText) {
    let content
    let rect = instance.getBoundingClientRect()
    if (highlightText) {
      content = `<span style="opacity: .6;">[</span>${highlightText}<span style="opacity: .6;">]</span>`
    }
    this.showOverlay(rect, content)
  }

  unHighlight () {
    if (this.overlay.parentNode) {
      document.body.removeChild(this.overlay)
    }
  }
}

export default Highligher
