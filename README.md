react-hearthstone
=================

[![Build Status](https://travis-ci.org/matkl/react-hearthstone.svg?branch=master)](https://travis-ci.org/matkl/react-hearthstone)
[![Coverage Status](https://coveralls.io/repos/github/matkl/react-hearthstone/badge.svg?branch=master)](https://coveralls.io/github/matkl/react-hearthstone?branch=master)
[![npm version](http://img.shields.io/npm/v/react-hearthstone.svg?style=flat)](https://npmjs.org/package/react-hearthstone "View this project on npm")

React components for Blizzard's [Hearthstone](http://us.battle.net/hearthstone/en/). WIP.

Based on [hearthstone-deckbuilder](https://github.com/matkl/hearthstone-deckbuilder). For use with card data from [HearthstoneJSON](https://hearthstonejson.com/).

## Components

### DeckBuilder

This will be a complete deck builder application, similar to [hearthstone-deckbuilder](https://github.com/matkl/hearthstone-deckbuilder) and based on the other components. Not usable yet.

### CardList

A list of cards, for example to represent a deck.

Example: [Show a random deck for a random class](http://matkl.github.io/react-hearthstone/examples/components/CardList.html)

### CardGallery

A gallery of cards using the game's card images.

Example: [Show a gallery of 30 random cards](http://matkl.github.io/react-hearthstone/examples/components/CardGallery.html)

## Installation

Using [npm](https://www.npmjs.com/):

```
$ npm install --save react-hearthstone
```

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import { DeckBuilder, CardGallery, CardList } from 'react-hearthstone';

// not using an ES6 transpiler
var DeckBuilder = require('react-hearthstone').DeckBuilder;
var CardGallery = require('react-hearthstone').CardGallery;
var CardList = require('react-hearthstone').CardList;
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/react-hearthstone/umd/ReactHearthstone.min.js"></script>
<script src="https://npmcdn.com/react-hearthstone/umd/style.css"></script>
```

You can find the library on `window.ReactHearthstone`.

See [examples](examples/) and [test](test/) for details.

## Author

**Matthias Klein**

+ [http://matthiasklein.me](http://matthiasklein.me)
+ [https://github.com/matkl](https://github.com/matkl)

## License

MIT
