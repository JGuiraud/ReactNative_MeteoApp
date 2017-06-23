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

var _TimeToDestination = require('../TimeToDestination');

var _TimeToDestination2 = babelHelpers.interopRequireDefault(_TimeToDestination);

var _reactNavigation = require('react-navigation');

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
                        lineNumber: 24
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
                        lineNumber: 31
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
                    lineNumber: 49
                }
            });
        }
    }, {
        key: 'details',
        value: function details() {
            console.log(this.props);
            return _react2.default.createElement(_TimeToDestination2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.index === 0) {
                return _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                            return _this2.details();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: [style.view, style.firstView], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 67
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: { color: 'white' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
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
                            { style: [style.temp, { fontSize: 50 }], __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 71
                                }
                            },
                            Math.round(this.props.day.temp.day),
                            '\xB0C'
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [style.temp, { fontSize: 15 }], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    }
                                },
                                'min ',
                                Math.round(this.props.day.temp.min),
                                '\xB0C'
                            ),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [style.temp, { fontSize: 15 }], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 74
                                    }
                                },
                                'max ',
                                Math.round(this.props.day.temp.max),
                                '\xB0C'
                            ),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [style.temp, { fontSize: 15 }], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 75
                                    }
                                },
                                this.props.day.pressure,
                                ' psi'
                            ),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [style.temp, { fontSize: 15 }], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 76
                                    }
                                },
                                this.props.day.humidity,
                                '% humidit\xE9.'
                            ),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: [style.temp, { fontSize: 15 }], __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 77
                                    }
                                },
                                this.props.day.speed,
                                ' km/h'
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                            return _this2.details();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: style.view, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: style.flex, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 86
                                }
                            },
                            this.icon(),
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: { marginLeft: 10 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
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
                                    lineNumber: 90
                                }
                            },
                            Math.round(this.props.day.temp.day),
                            '\xB0C'
                        )
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
        borderBottomColor: '#35a894',
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