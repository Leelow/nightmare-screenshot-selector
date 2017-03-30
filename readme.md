# nightmare-screenshot-selector
[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Codacy Coverage][codacy-coverage-image]][codacy-coverage-url]
[![Codacy Grade][codacy-grade-image]][codacy-grade-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
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
You juste have to clone the repo and run

```
$ npm test
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[downloads-image]: https://img.shields.io/npm/dt/nightmare-screenshot-selector.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/nightmare-screenshot-selector
[travis-image]: https://travis-ci.org/Leelow/nightmare-screenshot-selector.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/nightmare-screenshot-selector
<!--- [appveyor-image]: https://ci.appveyor.com/api/projects/status/ltppe1sp0ucnm6r3?svg=true --->
[appveyor-url]: https://ci.appveyor.com/project/Leelow/nightmare-screenshot-selector
<!--- [codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/32e42e7d81a343e1a9ea01326ca74a40 --->
<!--- [codacy-coverage-url]: https://www.codacy.com/app/Leelow/sha512sum?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/sha512sum&amp;utm_campaign=Badge_Coverage --->
<!--- [codacy-grade-image]: https://api.codacy.com/project/badge/Grade/32e42e7d81a343e1a9ea01326ca74a40 --->
<!--- [codacy-grade-url]: https://www.codacy.com/app/Leelow/sha512sum?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/sha512sum&amp;utm_campaign=Badge_Grade --->
[dependencies-image]: https://david-dm.org/leelow/nightmare-screenshot-selector/status.svg
[dependencies-url]: https://david-dm.org/leelow/nightmare-screenshot-selector?type=dev
[dev-dependencies-image]: https://david-dm.org/leelow/nightmare-screenshot-selector/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/nightmare-screenshot-selector?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
