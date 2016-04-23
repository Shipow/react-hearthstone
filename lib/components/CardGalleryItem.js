'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CardGalleryItem.css');

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