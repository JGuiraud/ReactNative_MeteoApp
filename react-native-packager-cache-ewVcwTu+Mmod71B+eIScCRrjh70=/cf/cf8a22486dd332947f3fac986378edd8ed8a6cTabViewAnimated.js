Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _initialiseProps,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-native-tab-view/src/TabViewAnimated.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _TabViewPropTypes = require('./TabViewPropTypes');

var TabViewPager = void 0;

switch (_reactNative.Platform.OS) {
  case 'android':
    TabViewPager = require('./TabViewPagerAndroid').default;
    break;
  case 'ios':
    TabViewPager = require('./TabViewPagerScroll').default;
    break;
  default:
    TabViewPager = require('./TabViewPagerPan').default;
    break;
}

var TabViewAnimated = (_temp = _class = function (_PureComponent) {
  babelHelpers.inherits(TabViewAnimated, _PureComponent);

  function TabViewAnimated(props) {
    babelHelpers.classCallCheck(this, TabViewAnimated);

    var _this = babelHelpers.possibleConstructorReturn(this, (TabViewAnimated.__proto__ || Object.getPrototypeOf(TabViewAnimated)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      loaded: [_this.props.navigationState.index],
      layout: babelHelpers.extends({}, _this.props.initialLayout, {
        measured: false
      }),
      position: new _reactNative.Animated.Value(_this.props.navigationState.index)
    };
    return _this;
  }

  babelHelpers.createClass(TabViewAnimated, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      this._positionListener = this.state.position.addListener(this._trackPosition);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      this.state.position.removeListener(this._positionListener);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          navigationState = _props.navigationState,
          onRequestChangeTab = _props.onRequestChangeTab,
          onChangePosition = _props.onChangePosition,
          canJumpToTab = _props.canJumpToTab,
          lazy = _props.lazy,
          initialLayout = _props.initialLayout,
          renderScene = _props.renderScene,
          renderPager = _props.renderPager,
          renderHeader = _props.renderHeader,
          renderFooter = _props.renderFooter,
          rest = babelHelpers.objectWithoutProperties(_props, ['navigationState', 'onRequestChangeTab', 'onChangePosition', 'canJumpToTab', 'lazy', 'initialLayout', 'renderScene', 'renderPager', 'renderHeader', 'renderFooter']);

      var props = this._buildSceneRendererProps();

      return _react2.default.createElement(
        _reactNative.View,
        {
          onLayout: this._handleLayout,
          loaded: this.state.loaded,
          style: [styles.container, this.props.style],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        },
        renderHeader && _react2.default.createElement(
          _reactNative.View,
          { collapsable: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            }
          },
          renderHeader(props)
        ),
        renderPager(babelHelpers.extends({}, props, rest, {
          children: navigationState.routes.map(function (route, index) {
            return _this2._renderScene(babelHelpers.extends({}, props, {
              route: route,
              index: index,
              focused: index === navigationState.index
            }));
          })
        })),
        renderFooter && _react2.default.createElement(
          _reactNative.View,
          { collapsable: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            }
          },
          renderFooter(props)
        )
      );
    }
  }]);
  return TabViewAnimated;
}(_react.PureComponent), _class.propTypes = {
  navigationState: _TabViewPropTypes.NavigationStatePropType.isRequired,
  onRequestChangeTab: _propTypes2.default.func.isRequired,
  onChangePosition: _propTypes2.default.func,
  initialLayout: _propTypes2.default.shape({
    height: _propTypes2.default.number.isRequired,
    width: _propTypes2.default.number.isRequired
  }),
  canJumpToTab: _propTypes2.default.func,
  renderPager: _propTypes2.default.func.isRequired,
  renderScene: _propTypes2.default.func.isRequired,
  renderHeader: _propTypes2.default.func,
  renderFooter: _propTypes2.default.func,
  lazy: _propTypes2.default.bool
}, _class.defaultProps = {
  renderPager: function renderPager(props) {
    return _react2.default.createElement(TabViewPager, babelHelpers.extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }));
  },
  initialLayout: {
    height: 0,
    width: 0
  }
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._mounted = false;
  this._subscriptions = {};

  this._renderScene = function (props) {
    var _props2 = _this3.props,
        renderScene = _props2.renderScene,
        lazy = _props2.lazy;
    var navigationState = props.navigationState;
    var loaded = _this3.state.loaded;

    if (lazy) {
      if (loaded.includes(navigationState.routes.indexOf(props.route))) {
        return renderScene(props);
      }
      return null;
    }
    return renderScene(props);
  };

  this._handleChangePosition = function (value) {
    var _props3 = _this3.props,
        onChangePosition = _props3.onChangePosition,
        navigationState = _props3.navigationState,
        lazy = _props3.lazy;

    if (onChangePosition) {
      onChangePosition(value);
    }
    var loaded = _this3.state.loaded;

    if (lazy) {
      var next = Math.ceil(value);
      if (next === navigationState.index) {
        next = Math.floor(value);
      }
      if (loaded.includes(next)) {
        return;
      }
      _this3.setState({
        loaded: [].concat(babelHelpers.toConsumableArray(loaded), [next])
      });
    }
  };

  this._trackPosition = function (e) {
    _this3._handleChangePosition(e.value);
    _this3._triggerEvent('position', e.value);
    _this3._lastPosition = e.value;
    var onChangePosition = _this3.props.onChangePosition;

    if (onChangePosition) {
      onChangePosition(e.value);
    }
  };

  this._getLastPosition = function () {
    if (typeof _this3._lastPosition === 'number') {
      return _this3._lastPosition;
    } else {
      return _this3.props.navigationState.index;
    }
  };

  this._handleLayout = function (e) {
    var _e$nativeEvent$layout = e.nativeEvent.layout,
        height = _e$nativeEvent$layout.height,
        width = _e$nativeEvent$layout.width;


    if (_this3.state.layout.width === width && _this3.state.layout.height === height) {
      return;
    }

    _this3.setState({
      layout: {
        measured: true,
        height: height,
        width: width
      }
    });
  };

  this._buildSceneRendererProps = function () {
    return {
      layout: _this3.state.layout,
      navigationState: _this3.props.navigationState,
      position: _this3.state.position,
      jumpToIndex: _this3._jumpToIndex,
      getLastPosition: _this3._getLastPosition,
      subscribe: _this3._addSubscription
    };
  };

  this._jumpToIndex = function (index) {
    if (!_this3._mounted) {
      return;
    }

    var _props4 = _this3.props,
        canJumpToTab = _props4.canJumpToTab,
        navigationState = _props4.navigationState;


    if (canJumpToTab && !canJumpToTab(navigationState.routes[index])) {
      _this3._triggerEvent('reset', navigationState.index);
      return;
    }

    if (index !== navigationState.index) {
      _this3.props.onRequestChangeTab(index);
    }
  };

  this._addSubscription = function (event, callback) {
    if (!_this3._subscriptions[event]) {
      _this3._subscriptions[event] = [];
    }
    _this3._subscriptions[event].push(callback);
    return {
      remove: function remove() {
        var index = _this3._subscriptions[event].indexOf(callback);
        if (index > -1) {
          _this3._subscriptions[event].splice(index, 1);
        }
      }
    };
  };

  this._triggerEvent = function (event, value) {
    if (_this3._subscriptions[event]) {
      _this3._subscriptions[event].forEach(function (fn) {
        return fn(value);
      });
    }
  };
}, _temp);
exports.default = TabViewAnimated;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
});