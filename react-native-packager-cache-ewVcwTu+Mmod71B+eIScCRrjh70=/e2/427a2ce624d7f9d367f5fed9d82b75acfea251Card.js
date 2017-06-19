Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-navigation/src/views/Card.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _PointerEventsContainer = require('./PointerEventsContainer');

var _PointerEventsContainer2 = babelHelpers.interopRequireDefault(_PointerEventsContainer);

var Card = function (_React$Component) {
  babelHelpers.inherits(Card, _React$Component);

  function Card() {
    babelHelpers.classCallCheck(this, Card);
    return babelHelpers.possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  babelHelpers.createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          pointerEvents = _props.pointerEvents,
          style = _props.style;

      return _react2.default.createElement(
        _reactNative.Animated.View,
        {
          pointerEvents: pointerEvents,
          ref: this.props.onComponentRef,
          style: [styles.main, style],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        children
      );
    }
  }]);
  return Card;
}(_react2.default.Component);

var styles = _reactNative.StyleSheet.create({
  main: {
    backgroundColor: '#E9E9EF',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    top: 0
  }
});

Card = (0, _PointerEventsContainer2.default)(Card);

exports.default = Card;