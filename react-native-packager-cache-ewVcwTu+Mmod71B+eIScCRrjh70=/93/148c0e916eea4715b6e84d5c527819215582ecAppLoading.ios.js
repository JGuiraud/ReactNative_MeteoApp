'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/expo/src/AppLoading.ios.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var NativeAppLoading = (0, _reactNative.requireNativeComponent)('ExponentAppLoading', null);

var AppLoading = function (_React$Component) {
  babelHelpers.inherits(AppLoading, _React$Component);

  function AppLoading() {
    babelHelpers.classCallCheck(this, AppLoading);
    return babelHelpers.possibleConstructorReturn(this, (AppLoading.__proto__ || Object.getPrototypeOf(AppLoading)).apply(this, arguments));
  }

  babelHelpers.createClass(AppLoading, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.NativeModules.ExponentAppLoadingManager.finishedAsync();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(NativeAppLoading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      });
    }
  }]);
  return AppLoading;
}(_react2.default.Component);

exports.default = AppLoading;