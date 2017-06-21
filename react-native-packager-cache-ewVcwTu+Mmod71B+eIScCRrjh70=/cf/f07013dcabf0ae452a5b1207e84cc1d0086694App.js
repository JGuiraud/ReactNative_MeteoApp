Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _About = require('./components/About');

var _About2 = babelHelpers.interopRequireDefault(_About);

var _Search = require('./components/Search');

var _Search2 = babelHelpers.interopRequireDefault(_Search);

var _ResultDetailed = require('./components/ResultDetailed');

var _ResultDetailed2 = babelHelpers.interopRequireDefault(_ResultDetailed);

var _reactNavigation = require('react-navigation');

var Tabs = (0, _reactNavigation.TabNavigator)({
  Search: { screen: _Search2.default },
  ResultDetailed: { screen: _ResultDetailed2.default },
  About: { screen: _About2.default }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    activeBackgroundColor: '#35a894',
    labelStyle: {
      fontSize: 20
    },
    style: {
      backgroundColor: '#3BB8A2'
    }
  }
});

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { hidden: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }),
        _react2.default.createElement(Tabs, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;