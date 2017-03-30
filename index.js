module.exports = function (options, done) {
  var self = this
  var path = typeof options === 'object' && options.path ? options.path : null
  var selector = typeof options === 'string' ? options : options.selector

  this.evaluate_now(function (selector) { // get element size
    var element = document.querySelector(selector)
    if (element) {
      var rect = element.getBoundingClientRect()
      return {
        x: Math.round(rect.left),
        y: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      }
    }
  }, function (err, clip) {
    if (err) return done(err)
    if (!clip) return done(new Error('Selector "' + selector + '" does not correspond to an element.'))
    if (path) self.screenshot(path, clip, done).run()
    else self.screenshot(clip, done).run()
  }, selector)
}
