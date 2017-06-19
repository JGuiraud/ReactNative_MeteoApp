Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/weather/Row.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _moment = require('moment');

var _moment2 = babelHelpers.interopRequireDefault(_moment);

require('moment/locale/fr');

var _Style = require('../../Style');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

_moment2.default.locale('fr');

var Row = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(Row, _React$Component);

    function Row() {
        babelHelpers.classCallCheck(this, Row);
        return babelHelpers.possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    babelHelpers.createClass(Row, [{
        key: 'day',
        value: function day() {
            var day = (0, _moment2.default)(this.props.day.dt * 1000).format('ddd');
            return _react2.default.createElement(
                _reactNative.Text,
                { style: [style.white, style.bold], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                day.toUpperCase()
            );
        }
    }, {
        key: 'date',
        value: function date() {
            var day = (0, _moment2.default)(this.props.day.dt * 1000).format('DD/MM');
            return _react2.default.createElement(
                _reactNative.Text,
                { style: [style.bold], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                day
            );
        }
    }, {
        key: 'icon',
        value: function icon() {
            var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

            var type = this.props.day.weather[0].main.toLowerCase();
            var image = void 0;
            console.log(type);
            switch (type) {
                case 'clear':
                    image = require('./icons/sun.png');
                    break;
                case 'rain':
                    image = require('./icons/cloudy.png');
                    break;
                default:
                    image = require('./icons/cloudy.png');
                    break;
            }
            return _react2.default.createElement(_reactNative.Image, { source: image, style: { width: size, height: size }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.index === 0) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: [style.view, style.firstView], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: 'white' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            },
                            ' ',
                            this.day(),
                            ' ',
                            this.date()
                        ),
                        this.icon(90)
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [style.temp, { fontSize: 40 }], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            }
                        },
                        Math.round(this.props.day.temp.day),
                        '\xB0C'
                    )
                );
            } else {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: style.view, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.flex, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        this.icon(),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { marginLeft: 10 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            },
                            ' ',
                            this.day(),
                            ' ',
                            this.date()
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: style.temp, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68
                            }
                        },
                        Math.round(this.props.day.temp.day),
                        '\xB0C'
                    )
                );
            }
        }
    }]);
    return Row;
}(_react2.default.Component), _class.propTypes = {
    day: _react2.default.PropTypes.object,
    index: _react2.default.PropTypes.number
}, _temp);
exports.default = Row;


var style = _reactNative.StyleSheet.create({
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: '#3583a8'
    },
    firstView: {
        backgroundColor: '#3583a8'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view: {
        backgroundColor: _Style2.default.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#3583a8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
});