export class Utils {
  static onHover (data) {
    console.log('Hover')
    data.target.style.outline = 'cyan solid 1px'
  }

  static offHover (data) {
    data.target.style.outline = ''
  }

  static onSVGHover (data) {
    console.log('Hover')
    data.target.style.stroke = 'cyan'
    data.target.style.strokeWidth = '2px'
  }

  static offSVGHover (data) {
    data.target.style.stroke = ''
    data.target.style.strokeWidth = ''
  }
}
