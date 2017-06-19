Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-navigation/src/navigators/StackNavigator.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createNavigationContainer = require('../createNavigationContainer');

var _createNavigationContainer2 = babelHelpers.interopRequireDefault(_createNavigationContainer);

var _createNavigator = require('./createNavigator');

var _createNavigator2 = babelHelpers.interopRequireDefault(_createNavigator);

var _CardStackTransitioner = require('../views/CardStackTransitioner');

var _CardStackTransitioner2 = babelHelpers.interopRequireDefault(_CardStackTransitioner);

var _StackRouter = require('../routers/StackRouter');

var _StackRouter2 = babelHelpers.interopRequireDefault(_StackRouter);

var _NavigatorTypes = require('./NavigatorTypes');

var _NavigatorTypes2 = babelHelpers.interopRequireDefault(_NavigatorTypes);

exports.default = function (routeConfigMap) {
  var stackConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var initialRouteName = stackConfig.initialRouteName,
      initialRouteParams = stackConfig.initialRouteParams,
      paths = stackConfig.paths,
      headerMode = stackConfig.headerMode,
      mode = stackConfig.mode,
      cardStyle = stackConfig.cardStyle,
      transitionConfig = stackConfig.transitionConfig,
      onTransitionStart = stackConfig.onTransitionStart,
      onTransitionEnd = stackConfig.onTransitionEnd,
      navigationOptions = stackConfig.navigationOptions;

  var stackRouterConfig = {
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams,
    paths: paths,
    navigationOptions: navigationOptions
  };

  var router = (0, _StackRouter2.default)(routeConfigMap, stackRouterConfig);

  var navigator = (0, _createNavigator2.default)(router, routeConfigMap, stackConfig, _NavigatorTypes2.default.STACK)(function (props) {
    return _react2.default.createElement(_CardStackTransitioner2.default, babelHelpers.extends({}, props, {
      headerMode: headerMode,
      mode: mode,
      cardStyle: cardStyle,
      transitionConfig: transitionConfig,
      onTransitionStart: onTransitionStart,
      onTransitionEnd: onTransitionEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }));
  });

  return (0, _createNavigationContainer2.default)(navigator, stackConfig.containerOptions);
};