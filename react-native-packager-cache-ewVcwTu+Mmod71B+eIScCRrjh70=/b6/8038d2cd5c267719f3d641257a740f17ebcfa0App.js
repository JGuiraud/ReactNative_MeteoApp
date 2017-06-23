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

var _TimeToDestination = require('./components/TimeToDestination');

var _TimeToDestination2 = babelHelpers.interopRequireDefault(_TimeToDestination);

var _reactNavigation = require('react-navigation');

var Tabs = (0, _reactNavigation.TabNavigator)({
  Search: { screen: _Search2.default },
  TimeToDestination: { screen: _TimeToDestination2.default },
  About: { screen: _About2.default }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    iconStyle: {
      width: 40,
      height: 30
    },
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    activeBackgroundColor: '#35a894',

    indicatorStyle: {
      backgroundColor: '#3583a8'
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
            lineNumber: 44
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { hidden: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        _react2.default.createElement(Tabs, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;