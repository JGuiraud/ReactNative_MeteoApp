Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/ResultDetailed.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var ResultDetailed = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(ResultDetailed, _React$Component);

    function ResultDetailed() {
        babelHelpers.classCallCheck(this, ResultDetailed);
        return babelHelpers.possibleConstructorReturn(this, (ResultDetailed.__proto__ || Object.getPrototypeOf(ResultDetailed)).apply(this, arguments));
    }

    babelHelpers.createClass(ResultDetailed, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    'Salut wesh'
                )
            );
        }
    }]);
    return ResultDetailed;
}(_react2.default.Component), _class.navigationOptions = function (_ref) {
    var navigation = _ref.navigation;

    return {
        title: 'test',
        tabBarIcon: function tabBarIcon() {
            return _react2.default.createElement(_reactNative.Image, { source: require('./icons/home.png'), style: { width: 30, height: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            });
        }
    };
}, _temp);
exports.default = ResultDetailed;