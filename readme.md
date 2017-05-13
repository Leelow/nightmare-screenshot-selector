# nightmare-screenshot-selector

[![npm version][npm-version-image]][npm-version-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

> A Nightmare plugin. [https://github.com/segmentio/nightmare](https://github.com/segmentio/nightmare)

A Nightmare plugin to easily take screenshots.

## Install

```
$ npm install --save nightmare-screenshot-selector
```

## Usage

```js
const Nightmare = require('nightmare');
const screenshotSelector = require('nightmare-screenshot-selector');
const fs = require('fs')

Nightmare.action('screenshotSelector', screenshotSelector)

var nightmare = Nightmare()
nightmare
        .goto('https://example.com/')
        .screenshotSelector('h1') // get the image in a buffer
        .then(function (data) {
          fs.writeFileSync('screen.png', data)
        })
        
nightmare
        .goto('https://example.com/')
        .screenshotSelector({selector: 'h1', path:'screen.png'}) // create directly a file
        .end()
```

## Test
You just have to clone the repo and run

```
$ npm test
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[npm-version-image]: https://badge.fury.io/js/nightmare-screenshot-selector.svg
[npm-version-url]: https://www.npmjs.com/package/nightmare-screenshot-selector
[downloads-image]: https://img.shields.io/npm/dt/nightmare-screenshot-selector.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/nightmare-screenshot-selector
[travis-image]: https://travis-ci.org/Leelow/nightmare-screenshot-selector.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/nightmare-screenshot-selector
[appveyor-image]: https://ci.appveyor.com/api/projects/status/qd3uu82sk5qc41ii?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/nightmare-screenshot-selector
[codacy-grade-image]: https://api.codacy.com/project/badge/Grade/290aa0752e4643dd8200c6a1d2a90e29
[codacy-grade-url]: https://www.codacy.com/app/Leelow/nightmare-screenshot-selector?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/nightmare-screenshot-selector&amp;utm_campaign=Badge_Grade
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
