Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/Search.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Style = require('../Style.js');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

var _reactNavigation = require('react-navigation');

var _Result = require('./Result');

var _Result2 = babelHelpers.interopRequireDefault(_Result);

var _ResultDetailed = require('./ResultDetailed');

var _ResultDetailed2 = babelHelpers.interopRequireDefault(_ResultDetailed);

var Search = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(Search, _React$Component);

    function Search(props) {
        babelHelpers.classCallCheck(this, Search);

        var _this = babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            city: "Toulouse"
        };
        return _this;
    }

    babelHelpers.createClass(Search, [{
        key: 'setCity',
        value: function setCity(city) {
            this.setState({ city: city });
        }
    }, {
        key: 'submit',
        value: function submit() {
            this.props.navigation.navigate('Result', { city: this.state.city });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.Image,
                { source: require('./images/landscape.jpg'), style: _Style2.default.containerGeneral, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: _Style2.default.container, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _Style2.default.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        'Quel temps fait-il \xE0 : '
                    ),
                    _react2.default.createElement(_reactNative.TextInput, {
                        style: _Style2.default.input,
                        value: this.state.city,
                        onChangeText: function onChangeText(text) {
                            return _this2.setCity(text);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this2.submit();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: _Style2.default.button, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            'Rechercher'
                        )
                    )
                )
            );
        }
    }]);
    return Search;
}(_react2.default.Component), _class.navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: function tabBarIcon() {
        return _react2.default.createElement(_reactNative.Image, { source: require('./icons/search.png'), style: { width: 30, height: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
            }
        });
    }
}, _temp);


var navigationOptions = {
    headerStyle: _Style2.default.header,
    headerTitleStyle: _Style2.default.headerTitle
};

exports.default = (0, _reactNavigation.StackNavigator)({
    Search: { screen: Search, navigationOptions: navigationOptions },
    Result: { screen: _Result2.default, navigationOptions: navigationOptions }
});