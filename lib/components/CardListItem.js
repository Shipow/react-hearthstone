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
    { className: 'hs-CardListItem' + (props.rarity ? ' hs-CardListItem_' + props.rarity.toLowerCase() : '') },
    _react2.default.createElement('div', { className: 'hs-CardListItem__image', style: { backgroundImage: 'url(' + props.imageUrl + ')' } }),
    _react2.default.createElement(
      'div',
      { className: 'hs-CardListItem__content' },
      _react2.default.createElement(
        'div',
        { className: 'hs-CardListItem__cost' },
        props.cost
      ),
      _react2.default.createElement(
        'div',
        { className: 'hs-CardListItem__name' },
        props.name
      ),
      props.count && props.count > 1 ? _react2.default.createElement(
        'div',
        { className: 'hs-CardListItem__count' },
        props.count
      ) : null
    )
  );
};

exports.default = CardListItem;