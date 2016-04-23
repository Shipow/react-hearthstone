'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _CardGallery = require('./CardGallery');

var _CardGallery2 = _interopRequireDefault(_CardGallery);

var _CardList = require('./CardList');

var _CardList2 = _interopRequireDefault(_CardList);

require('./DeckBuilder.css');

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