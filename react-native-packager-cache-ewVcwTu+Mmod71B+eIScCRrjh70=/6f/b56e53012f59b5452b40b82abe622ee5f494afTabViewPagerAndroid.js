Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-native-tab-view/src/TabViewPagerAndroid.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _TabViewPropTypes = require('./TabViewPropTypes');

var TabViewPagerAndroid = (_temp = _class = function (_PureComponent) {
  babelHelpers.inherits(TabViewPagerAndroid, _PureComponent);

  function TabViewPagerAndroid(props) {
    babelHelpers.classCallCheck(this, TabViewPagerAndroid);

    var _this = babelHelpers.possibleConstructorReturn(this, (TabViewPagerAndroid.__proto__ || Object.getPrototypeOf(TabViewPagerAndroid)).call(this, props));

    _this._isIdle = true;
    _this._currentIndex = 0;

    _this._getPageIndex = function (index) {
      return _reactNative.I18nManager.isRTL ? _this.props.navigationState.routes.length - (index + 1) : index;
    };

    _this._setPage = function (index) {
      if (_this._viewPager) {
        var page = _this._getPageIndex(index);
        if (_this.props.animationEnabled !== false) {
          _this._viewPager.setPage(page);
        } else {
          _this._viewPager.setPageWithoutAnimation(page);
        }
      }
    };

    _this._handlePageChange = function (index) {
      if (_this._isIdle && _this._currentIndex !== index) {
        _this._setPage(index);
        _this._currentIndex = index;
      }
    };

    _this._handlePageScroll = function (e) {
      _this.props.position.setValue(_this._getPageIndex(e.nativeEvent.position) + e.nativeEvent.offset * (_reactNative.I18nManager.isRTL ? -1 : 1));
    };

    _this._handlePageScrollStateChanged = function (e) {
      _this._isIdle = e === 'idle';
      _this.props.jumpToIndex(_this._currentIndex);
    };

    _this._handlePageSelected = function (e) {
      var index = _this._getPageIndex(e.nativeEvent.position);
      _this._currentIndex = index;
    };

    _this._setRef = function (el) {
      return _this._viewPager = el;
    };

    _this._currentIndex = _this.props.navigationState.index;
    return _this;
  }

  babelHelpers.createClass(TabViewPagerAndroid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resetListener = this.props.subscribe('reset', this._handlePageChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.layout !== nextProps.layout || _react.Children.count(this.props.children) !== _react.Children.count(nextProps.children)) {
        global.requestAnimationFrame(function () {
          if (_this2._viewPager) {
            var navigationState = nextProps.navigationState;

            var page = _reactNative.I18nManager.isRTL ? navigationState.routes.length - (navigationState.index + 1) : navigationState.index;

            _this2._viewPager.setPageWithoutAnimation(page);
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._handlePageChange(this.props.navigationState.index);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._resetListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          navigationState = _props.navigationState,
          swipeEnabled = _props.swipeEnabled;

      var content = _react.Children.map(children, function (child, i) {
        return _react2.default.createElement(
          _reactNative.View,
          {
            key: navigationState.routes[i].key,
            testID: navigationState.routes[i].testID,
            style: styles.page,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          child
        );
      });

      if (_reactNative.I18nManager.isRTL) {
        content.reverse();
      }

      var initialPage = this._getPageIndex(navigationState.index);

      return _react2.default.createElement(
        _reactNative.ViewPagerAndroid,
        {
          key: navigationState.routes.length,
          keyboardDismissMode: 'on-drag',
          initialPage: initialPage,
          scrollEnabled: swipeEnabled !== false,
          onPageScroll: this._handlePageScroll,
          onPageScrollStateChanged: this._handlePageScrollStateChanged,
          onPageSelected: this._handlePageSelected,
          style: styles.container,
          ref: this._setRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        },
        content
      );
    }
  }]);
  return TabViewPagerAndroid;
}(_react.PureComponent), _class.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  animationEnabled: _propTypes2.default.bool,
  swipeEnabled: _propTypes2.default.bool,
  children: _propTypes2.default.node
}), _temp);
exports.default = TabViewPagerAndroid;


var styles = _reactNative.StyleSheet.create({
  container: {
    flexGrow: 1
  },

  page: {
    overflow: 'hidden'
  }
});