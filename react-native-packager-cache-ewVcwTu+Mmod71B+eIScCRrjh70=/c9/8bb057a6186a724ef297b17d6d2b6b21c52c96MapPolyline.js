var _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/node_modules/react-native-maps/lib/components/MapPolyline.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  coordinates: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    latitude: _react.PropTypes.number.isRequired,
    longitude: _react.PropTypes.number.isRequired
  })),

  onPress: _react.PropTypes.func,

  fillColor: _react.PropTypes.string,

  strokeWidth: _react.PropTypes.number,

  strokeColor: _react.PropTypes.string,

  zIndex: _react.PropTypes.number,

  lineCap: _react.PropTypes.oneOf(['butt', 'round', 'square']),

  lineJoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel']),

  miterLimit: _react.PropTypes.number,

  geodesic: _react.PropTypes.bool,

  lineDashPhase: _react.PropTypes.number,

  lineDashPattern: _react.PropTypes.arrayOf(_react.PropTypes.number)
});

var defaultProps = {
  strokeColor: '#000',
  strokeWidth: 1
};

var MapPolyline = function (_React$Component) {
  babelHelpers.inherits(MapPolyline, _React$Component);

  function MapPolyline() {
    babelHelpers.classCallCheck(this, MapPolyline);
    return babelHelpers.possibleConstructorReturn(this, (MapPolyline.__proto__ || Object.getPrototypeOf(MapPolyline)).apply(this, arguments));
  }

  babelHelpers.createClass(MapPolyline, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.polyline.setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var AIRMapPolyline = this.getAirComponent();
      return _react2.default.createElement(AIRMapPolyline, babelHelpers.extends({}, this.props, { ref: function ref(_ref) {
          _this2.polyline = _ref;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }));
    }
  }]);
  return MapPolyline;
}(_react2.default.Component);

MapPolyline.propTypes = propTypes;
MapPolyline.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapPolyline, {
  componentType: 'Polyline',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});