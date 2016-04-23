var reactHearthstone =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/react-hearthstone/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DeckBuilder = exports.CardList = exports.CardGallery = undefined;
	
	var _CardGallery = __webpack_require__(1);
	
	var _CardGallery2 = _interopRequireDefault(_CardGallery);
	
	var _CardList = __webpack_require__(10);
	
	var _CardList2 = _interopRequireDefault(_CardList);
	
	var _DeckBuilder = __webpack_require__(16);
	
	var _DeckBuilder2 = _interopRequireDefault(_DeckBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CardGallery = _CardGallery2.default;
	exports.CardList = _CardList2.default;
	exports.DeckBuilder = _DeckBuilder2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CardGalleryItem = __webpack_require__(3);
	
	var _CardGalleryItem2 = _interopRequireDefault(_CardGalleryItem);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardGallery = function (_Component) {
	  _inherits(CardGallery, _Component);
	
	  function CardGallery() {
	    _classCallCheck(this, CardGallery);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardGallery).apply(this, arguments));
	  }
	
	  _createClass(CardGallery, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'ul',
	        { className: 'hs-CardGallery' },
	        this.props.cards.map(function (card) {
	          return _react2.default.createElement(_CardGalleryItem2.default, _extends({ key: card.id }, card, { onClick: _this2.props.onClick ? _this2.props.onClick.bind(_this2, card) : null }));
	        })
	      );
	    }
	  }]);
	
	  return CardGallery;
	}(_react.Component);
	
	exports.default = CardGallery;
	
	
	CardGallery.propTypes = {
	  cards: _react.PropTypes.array.isRequired,
	  onClick: _react.PropTypes.func
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardGalleryItem = function CardGalleryItem(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'hs-CardGalleryItem' + (props.rarity ? ' hs-CardGalleryItem_' + props.rarity.toLowerCase() : ''), onClick: props.onClick },
	    _react2.default.createElement('img', { className: 'hs-CardGalleryItem__image', src: props.imageUrl })
	  );
	};
	
	CardGalleryItem.propTypes = {
	  rarity: _react.PropTypes.string,
	  imageUrl: _react.PropTypes.string
	};
	
	exports.default = CardGalleryItem;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CardListItem = __webpack_require__(11);
	
	var _CardListItem2 = _interopRequireDefault(_CardListItem);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CardList = function (_Component) {
	  _inherits(CardList, _Component);
	
	  function CardList() {
	    _classCallCheck(this, CardList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardList).apply(this, arguments));
	  }
	
	  _createClass(CardList, [{
	    key: 'render',
	    value: function render() {
	      var itemsById = {};
	
	      this.props.cards.forEach(function (card) {
	        if (!itemsById[card.id]) {
	          itemsById[card.id] = {
	            card: card,
	            count: 0
	          };
	        }
	        itemsById[card.id].count += 1;
	      });
	
	      var items = Object.keys(itemsById).map(function (cardId) {
	        return itemsById[cardId];
	      });
	
	      var sortedItems = items.sort(function sortByCostAndName(a, b) {
	        if (a.card.cost == b.card.cost) {
	          return a.card.name.localeCompare(b.card.name);
	        }
	        return a.card.cost - b.card.cost;
	      });
	
	      return _react2.default.createElement(
	        'ul',
	        { className: 'hs-CardList' },
	        sortedItems.map(function (item) {
	          return _react2.default.createElement(_CardListItem2.default, { key: item.card.id, card: item.card, count: item.count });
	        })
	      );
	    }
	  }]);
	
	  return CardList;
	}(_react.Component);
	
	exports.default = CardList;
	
	
	CardList.propTypes = {
	  cards: _react.PropTypes.array
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardListItem = function CardListItem(props) {
	  return _react2.default.createElement(
	    'li',
	    { className: 'hs-CardListItem' + (props.card.rarity ? ' hs-CardListItem_' + props.card.rarity.toLowerCase() : '') },
	    _react2.default.createElement('div', { className: 'hs-CardListItem__image', style: { backgroundImage: 'url(' + props.card.imageUrl + ')' } }),
	    _react2.default.createElement(
	      'div',
	      { className: 'hs-CardListItem__content' },
	      _react2.default.createElement(
	        'div',
	        { className: 'hs-CardListItem__cost' },
	        props.card.cost
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'hs-CardListItem__name' },
	        props.card.name
	      ),
	      props.count && props.count > 1 ? _react2.default.createElement(
	        'div',
	        { className: 'hs-CardListItem__count' },
	        props.count
	      ) : null
	    )
	  );
	};
	
	CardListItem.propTypes = {
	  card: _react.PropTypes.shape({
	    rarity: _react.PropTypes.string,
	    imageUrl: _react.PropTypes.string,
	    cost: _react.PropTypes.number.isRequired,
	    name: _react.PropTypes.string.isRequired
	  }),
	  count: _react.PropTypes.number
	};
	
	exports.default = CardListItem;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(17);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _CardGallery = __webpack_require__(1);
	
	var _CardGallery2 = _interopRequireDefault(_CardGallery);
	
	var _CardList = __webpack_require__(10);
	
	var _CardList2 = _interopRequireDefault(_CardList);
	
	__webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeckBuilder = function (_Component) {
	  _inherits(DeckBuilder, _Component);
	
	  function DeckBuilder(props) {
	    _classCallCheck(this, DeckBuilder);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeckBuilder).call(this, props));
	
	    _this.state = {
	      cards: [],
	      deck: []
	    };
	    _this.addCardToDeck = _this.addCardToDeck.bind(_this);
	    return _this;
	  }
	
	  _createClass(DeckBuilder, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _jquery2.default.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json', function (cards) {
	        cards.forEach(function (card) {
	          card.imageUrl = 'http://wow.zamimg.com/images/hearthstone/cards/enus/medium/' + card.id + '.png';
	        });
	        this.setState({ cards: cards });
	      }.bind(this));
	    }
	  }, {
	    key: 'addCardToDeck',
	    value: function addCardToDeck(card) {
	      this.setState({ deck: this.state.deck.concat(card) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'hs-DeckBuilder' },
	        _react2.default.createElement(
	          'div',
	          { className: 'hs-DeckBuilder__collection' },
	          _react2.default.createElement(_CardGallery2.default, { cards: this.state.cards.slice(0, 30), onClick: this.addCardToDeck })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'hs-DeckBuilder__deck' },
	          _react2.default.createElement(_CardList2.default, { cards: this.state.deck })
	        )
	      );
	    }
	  }]);
	
	  return DeckBuilder;
	}(_react.Component);

	exports.default = DeckBuilder;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=react-hearthstone.js.map