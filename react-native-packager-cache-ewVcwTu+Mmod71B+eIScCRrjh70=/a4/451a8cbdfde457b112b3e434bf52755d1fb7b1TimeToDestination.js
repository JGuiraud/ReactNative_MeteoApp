Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/TimeToDestination.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _Style = require('../Style.js');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

var _ResultGoogle = require('./ResultGoogle');

var _ResultGoogle2 = babelHelpers.interopRequireDefault(_ResultGoogle);

var TimeToDestination = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(TimeToDestination, _React$Component);

    function TimeToDestination(props) {
        babelHelpers.classCallCheck(this, TimeToDestination);

        var _this = babelHelpers.possibleConstructorReturn(this, (TimeToDestination.__proto__ || Object.getPrototypeOf(TimeToDestination)).call(this, props));

        _this.state = {
            depart: "Toulouse",
            destination: "Saint Gaudens",
            locomotions: [{ id: 1, label: "Voiture", loco: "driving" }, { id: 2, label: "Vélo", loco: "bicycling" }, { id: 3, label: "À pied", loco: "walking" }],
            selectedlocomotion: "driving"
        };
        return _this;
    }

    babelHelpers.createClass(TimeToDestination, [{
        key: 'setDepart',
        value: function setDepart(depart) {
            this.setState({ depart: depart });
        }
    }, {
        key: 'setDestination',
        value: function setDestination(destination) {
            this.setState({ destination: destination });
        }
    }, {
        key: 'setLocomotion',
        value: function setLocomotion(selectedlocomotion) {
            this.setState({ selectedlocomotion: selectedlocomotion });
        }
    }, {
        key: 'submit',
        value: function submit() {
            console.log(this.state.depart + ' | ' + this.state.destination + ' | ' + this.state.selectedlocomotion);
            this.props.navigation.navigate('ResultGoogle', {
                depart: this.state.depart,
                selectedlocomotion: this.state.selectedlocomotion,
                destination: this.state.destination
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var picker = this.state.locomotions.map(function (data) {
                return _react2.default.createElement(_reactNative.Picker.Item, { key: data.id, label: data.label, value: data.loco, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                });
            });
            return _react2.default.createElement(
                _reactNative.Image,
                { source: require('./images/roadback.jpg'), style: _Style2.default.containerGeneral, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: _Style2.default.container, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _Style2.default.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        },
                        'D\xE9part'
                    ),
                    _react2.default.createElement(_reactNative.TextInput, {
                        style: _Style2.default.input,
                        value: this.state.depart,
                        onChangeText: function onChangeText(text) {
                            return _this2.setDepart(text);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: _Style2.default.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        },
                        'Destination'
                    ),
                    _react2.default.createElement(_reactNative.TextInput, {
                        style: _Style2.default.input,
                        value: this.state.destination,
                        onChangeText: function onChangeText(text) {
                            return _this2.setDestination(text);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Picker,
                        {
                            selectedValue: this.state.selectedlocomotion,
                            onValueChange: function onValueChange(itemValue) {
                                return _this2.setState({ selectedlocomotion: itemValue });
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        },
                        picker
                    ),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this2.submit();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: _Style2.default.button, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            },
                            'Connaitre le trafic'
                        )
                    )
                )
            );
        }
    }]);
    return TimeToDestination;
}(_react2.default.Component), _class.navigationOptions = function (_ref) {
    var navigation = _ref.navigation;

    return {
        title: 'Quel est le trafic ?',
        tabBarIcon: function tabBarIcon() {
            return _react2.default.createElement(_reactNative.Image, { source: require('./icons/home.png'), style: { width: 30, height: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            });
        }
    };
}, _temp);


var navigationOptions = {
    headerStyle: _Style2.default.header,
    headerTitleStyle: _Style2.default.headerTitle
};

exports.default = (0, _reactNavigation.StackNavigator)({
    TimeToDestination: { screen: TimeToDestination, navigationOptions: navigationOptions },
    ResultGoogle: { screen: _ResultGoogle2.default, navigationOptions: navigationOptions }
});