'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardListItem = require('./CardListItem');

var _CardListItem2 = _interopRequireDefault(_CardListItem);

require('./CardList.css');

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