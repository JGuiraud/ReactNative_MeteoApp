Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/About.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Style = require('../Style.js');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

var About = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(About, _React$Component);

    function About() {
        babelHelpers.classCallCheck(this, About);
        return babelHelpers.possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    babelHelpers.createClass(About, [{
        key: 'search',
        value: function search() {
            this.props.navigation.navigate('Search');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.View,
                { style: _Style2.default.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: _Style2.default.title, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    '\xC0 Propos de l\'application'
                ),
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae nostrum consequatur dolores voluptatum. Obcaecati laboriosam recusandae itaque expedita debitis harum velit quibusdam ullam voluptatibus omnis, veritatis aperiam aliquam dolore voluptates ipsam iure magni!'
                ),
                _react2.default.createElement(_reactNative.Button, { color: _Style2.default.color, onPress: function onPress() {
                        return _this2.search();
                    }, title: 'Rechercher une ville', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                })
            );
        }
    }]);
    return About;
}(_react2.default.Component), _class.navigationOptions = {
    tabBarIcon: function tabBarIcon() {
        return _react2.default.createElement(_reactNative.Image, { source: require('./icons/about.png'), style: { width: 30, height: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        });
    }
}, _temp);
exports.default = About;