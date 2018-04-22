export class Utils {
  static onHover (data) {
    console.log('Hover')
    data.target.style.outline = 'cyan solid 1px'
  }

  static offHover (data) {
    data.target.style.outline = ''
  }
}
