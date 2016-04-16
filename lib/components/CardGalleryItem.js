'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardGalleryItem = function CardGalleryItem(props) {
  return _react2.default.createElement(
    'li',
    { className: 'hs-CardGalleryItem' + (props.rarity ? ' hs-CardListItem_' + props.rarity.toLowerCase() : '') },
    _react2.default.createElement('img', { className: 'hs-CardGalleryItem__image', src: props.imageUrl })
  );
};

exports.default = CardGalleryItem;