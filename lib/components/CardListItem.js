'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CardListItem.css');

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