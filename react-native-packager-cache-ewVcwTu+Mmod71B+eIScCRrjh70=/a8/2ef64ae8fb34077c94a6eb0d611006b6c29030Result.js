Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/Result.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Style = require('../Style');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

var _Row = require('./weather/Row');

var _Row2 = babelHelpers.interopRequireDefault(_Row);

var _reactNavigation = require('react-navigation');

var Result = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(Result, _React$Component);

    function Result(props) {
        babelHelpers.classCallCheck(this, Result);

        var _this = babelHelpers.possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

        _this.state = {
            city: _this.props.navigation.state.params.city,
            report: null,
            dataSource: new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
                    return r1 !== r2;
                } })
        };
        setTimeout(function () {
            return _this.getWeatherFromApiAsync();
        }, 1000);
        return _this;
    }

    babelHelpers.createClass(Result, [{
        key: 'details',
        value: function details() {
            navigate('ResultDetailed');
        }
    }, {
        key: 'getWeatherFromApiAsync',
        value: function getWeatherFromApiAsync() {
            var _this2 = this;

            return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&mode=json&units=metric&appid=d82ce537f5b61d85d53557bad5a65ae1&cnt=16').then(function (response) {
                return response.json();
            }).then(function (responseText) {
                _this2.setState({ report: responseText });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.report === null) {
                return _react2.default.createElement(
                    _reactNative.View,
                    { style: { flex: 1, justifyContent: 'center', alignItems: 'center' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        }
                    },
                    _react2.default.createElement(_reactNative.ActivityIndicator, { color: _Style2.default.color, size: 'large', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            }
                        },
                        'Chargement...'
                    )
                );
            } else {
                return _react2.default.createElement(_reactNative.ListView, {
                    dataSource: this.state.dataSource.cloneWithRows(this.state.report.list),
                    renderRow: function renderRow(row, j, k) {
                        return _react2.default.createElement(_Row2.default, { day: row, index: parseInt(k, 10), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        });
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                });
            }
        }
    }]);
    return Result;
}(_react2.default.Component), _class.navigationOptions = function (_ref) {
    var navigation = _ref.navigation;

    return {
        title: 'M\xE9t\xE9o ' + navigation.state.params.city + ' | 16j',
        tabBarIcon: function tabBarIcon() {
            return _react2.default.createElement(_reactNative.Image, { source: require('./icons/search.png'), style: { width: 30, height: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            });
        }
    };
}, _temp);
exports.default = Result;