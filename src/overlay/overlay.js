const overlay = document.createElement('div')

overlay.style.backgroundColor = 'rgba(104, 182, 255, 0.35)'
overlay.style.position = 'fixed'
overlay.style.zIndex = '99999999999999'
overlay.style.pointerEvents = 'none'
overlay.style.display = 'flex'
overlay.style.alignItems = 'center'
overlay.style.justifyContent = 'center'
overlay.style.borderRadius = '3px'

const overlayContent = document.createElement('div')

overlayContent.style.backgroundColor = 'rgba(104, 182, 255, 0.9)'
overlayContent.style.fontFamily = 'monospace'
overlayContent.style.fontSize = '11px'
overlayContent.style.padding = '2px 3px'
overlayContent.style.borderRadius = '3px'
overlayContent.style.color = 'white'

overlay.appendChild(overlayContent)

function showOverlay ({
  width = 0,
  height = 0,
  top = 0,
  left = 0
}, content = '') {
  overlay.style.width = ~~width + 'px'
  overlay.style.height = ~~height + 'px'
  overlay.style.top = ~~top + 'px'
  overlay.style.left = ~~left + 'px'
  if (content) {
    overlayContent.innerHTML = content
  }

  document.body.appendChild(overlay)
}

function _unHighlight () {
  if (overlay.parentNode) {
    document.body.removeChild(overlay)
  }
}

function _highlight (instance, highlightText) {
  let content
  let rect = instance.getBoundingClientRect()
  if (highlightText) {
    content = `<span style="opacity: .6;">[</span>${highlightText}<span style="opacity: .6;">]</span>`
  }
  showOverlay(rect, content)
}

export {
  showOverlay,
  _unHighlight,
  _highlight
}
