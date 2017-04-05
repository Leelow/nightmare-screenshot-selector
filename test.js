/* eslint-env mocha */
const Nightmare = require('nightmare')
const screenshotSelector = require('./index.js')
const assert = require('assert')
const path = require('path')
const fs = require('fs')

Nightmare.action('screenshotSelector', screenshotSelector)
var nightmare

var screenFile = path.join(__dirname, 'screen.png')

function cleanScreenFile (callback) {
  fs.stat(screenFile, function (err, stats) {
    if (err && err.code === 'ENOENT') return callback()
    else if (err) return callback(err)
    else {
      if (stats.isFile()) fs.unlink(screenFile, callback)
      else callback()
    }
  })
}

describe('ScreenshotSelector', function () {
  beforeEach(function (done) {
    cleanScreenFile(function (err) {
      if (err) return done(err)
      nightmare = Nightmare({show: false})
      nightmare
        .goto('https://example.com/')
        .wait('h1')
        .then(function () {
          done()
        })
    })
  })

  afterEach(function (done) {
    nightmare
      .end()
      .then(function () {
        cleanScreenFile(done)
      })
  })

  it('should throw an error with a bad selector', function (done) {
    var passed = false
    nightmare
      .screenshotSelector('wrong selector')
      .catch(function (err) {
        assert.equal(err.message, 'Selector "wrong selector" does not correspond to an element.')
        passed = true
      })
      .then(function () {
        assert.ok(passed)
        done()
      })
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
      .screenshotSelector({selector: 'h1', path: screenFile})
      .catch(done)
      .then(function () {
        fs.stat(screenFile, function (err, stats) {
          if (err && err.code === 'ENOENT') return done()
          else if (err) return done(err)
          else {
            if (stats.isFile()) fs.unlink(screenFile, done)
            else done()
          }
        })
      })
  })
})
