/* eslint-env mocha */
const Nightmare = require('nightmare')
const screenshotSelector = require('./index.js')
const assert = require('assert')
const fs = require('fs')

Nightmare.action('screenshotSelector', screenshotSelector)
var nightmare = Nightmare({})

describe('ScreenshotSelector', function () {
  before(function (done) {
    var cb = function () {
      nightmare
        .goto('https://example.com/')
        .then(function () {
          done()
        })
    }
    fs.exists('screen.png', function (exists) {
      if (!exists) cb()
      else {
        fs.unlink('screen.png', function (err) {
          if (err) done(err)
          cb()
        })
      }
    })
  })

  after(function (done) {
    fs.unlink('screen.png', done)
  })

  it('should throw an error with a bad selector', function (done) {
    nightmare
      .screenshotSelector('wrong selector')
      .catch(function (err) {
        assert.equal(err.message, 'Selector "wrong selector" does not correspond to an element.')
        done()
      })
      .then()
  })

  it('should take a screenshot with a string as argument', function (done) {
    nightmare
      .screenshotSelector('h1')
      .catch(done)
      .then(function (data) {
        assert.ok(data instanceof Buffer)
        done()
      })
  })

  it('should take a screenshot with an object as argument', function (done) {
    nightmare
      .screenshotSelector({selector: 'h1'})
      .catch(done)
      .then(function (data) {
        assert.ok(data instanceof Buffer)
        done()
      })
  })

  it('should take a screenshot and save it as a file', function (done) {
    nightmare
      .screenshotSelector({selector: 'h1', path: 'screen.png'})
      .catch(done)
      .then(function () {
        fs.exists('screen.png', function (exists) {
          assert.ok(exists)
          done()
        })
      })
  })
})
