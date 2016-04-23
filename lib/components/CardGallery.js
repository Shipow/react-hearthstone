'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardGalleryItem = require('./CardGalleryItem');

var _CardGalleryItem2 = _interopRequireDefault(_CardGalleryItem);

require('./CardGallery.css');

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