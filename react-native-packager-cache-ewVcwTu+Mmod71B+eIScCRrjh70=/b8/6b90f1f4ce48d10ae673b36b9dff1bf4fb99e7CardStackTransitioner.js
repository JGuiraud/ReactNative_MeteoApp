Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp2,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-navigation/src/views/CardStackTransitioner.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _CardStack = require('./CardStack');

var _CardStack2 = babelHelpers.interopRequireDefault(_CardStack);

var _CardStackStyleInterpolator = require('./CardStackStyleInterpolator');

var _CardStackStyleInterpolator2 = babelHelpers.interopRequireDefault(_CardStackStyleInterpolator);

var _Transitioner = require('./Transitioner');

var _Transitioner2 = babelHelpers.interopRequireDefault(_Transitioner);

var _TransitionConfigs = require('./TransitionConfigs');

var _TransitionConfigs2 = babelHelpers.interopRequireDefault(_TransitionConfigs);

var NativeAnimatedModule = _reactNative.NativeModules && _reactNative.NativeModules.NativeAnimatedModule;

var CardStackTransitioner = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(CardStackTransitioner, _Component);

  function CardStackTransitioner() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CardStackTransitioner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CardStackTransitioner.__proto__ || Object.getPrototypeOf(CardStackTransitioner)).call.apply(_ref, [this].concat(args))), _this), _this._configureTransition = function (transitionProps, prevTransitionProps) {
      var isModal = _this.props.mode === 'modal';

      var transitionSpec = babelHelpers.extends({}, _TransitionConfigs2.default.getTransitionConfig(_this.props.transitionConfig, transitionProps, prevTransitionProps, isModal).transitionSpec);
      if (!!NativeAnimatedModule && _CardStackStyleInterpolator2.default.canUseNativeDriver(isModal)) {
        transitionSpec.useNativeDriver = true;
      }
      return transitionSpec;
    }, _this._render = function (props) {
      var _this$props = _this.props,
          screenProps = _this$props.screenProps,
          headerMode = _this$props.headerMode,
          mode = _this$props.mode,
          router = _this$props.router,
          cardStyle = _this$props.cardStyle,
          transitionConfig = _this$props.transitionConfig,
          style = _this$props.style;

      return _react2.default.createElement(_CardStack2.default, babelHelpers.extends({
        screenProps: screenProps,
        headerMode: headerMode,
        mode: mode,
        router: router,
        cardStyle: cardStyle,
        transitionConfig: transitionConfig,
        style: style
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(CardStackTransitioner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Transitioner2.default, {
        configureTransition: this._configureTransition,
        navigation: this.props.navigation,
        render: this._render,
        style: this.props.style,
        onTransitionStart: this.props.onTransitionStart,
        onTransitionEnd: this.props.onTransitionEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }
  }]);
  return CardStackTransitioner;
}(_react.Component), _class.defaultProps = {
  mode: 'card'
}, _temp2);
exports.default = CardStackTransitioner;