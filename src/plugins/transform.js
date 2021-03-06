import prefix from '../prefix'

export default {
  noPrefill: ['transform'],
  supportedProperty: (prop, style, options) => {
    if (prop === 'transform') {
      if (options.transform) {
        return prefix.css + prop
      }
      return prop
    }
    return false
  }
}
