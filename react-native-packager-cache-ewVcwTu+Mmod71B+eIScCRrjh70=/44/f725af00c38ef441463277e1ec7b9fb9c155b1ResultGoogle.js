Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/jerome/Documents/01_Simplon/Git/testMeteoApp/components/ResultGoogle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Style = require('../Style');

var _Style2 = babelHelpers.interopRequireDefault(_Style);

var _TimeToDestination = require('./TimeToDestination');

var _TimeToDestination2 = babelHelpers.interopRequireDefault(_TimeToDestination);

var ResultGoogle = (_temp = _class = function (_React$Component) {
    babelHelpers.inherits(ResultGoogle, _React$Component);

    function ResultGoogle(props) {
        babelHelpers.classCallCheck(this, ResultGoogle);

        var _this = babelHelpers.possibleConstructorReturn(this, (ResultGoogle.__proto__ || Object.getPrototypeOf(ResultGoogle)).call(this, props));

        _this.state = {
            depart: _this.props.navigation.state.params.depart,
            destination: _this.props.navigation.state.params.destination,
            selectedlocomotion: _this.props.navigation.state.params.selectedlocomotion,
            report: null
        };
        setTimeout(function () {
            return _this.getTrafficFromGoogle();
        }, 1000);
        return _this;
    }

    babelHelpers.createClass(ResultGoogle, [{
        key: 'getTrafficFromGoogle',
        value: function getTrafficFromGoogle() {
            var _this2 = this;

            return fetch('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Toulouse+FR&destinations=Saint%20Gaudens+FR&mode=bicycling&language=fr-FR&key=AIzaSyBxe6_zFX7HT0DNZ6BsFc34H_ASLkur0N0').then(function (response) {
                return response.json();
            }).then(function (responseJson) {
                _this2.setState({ report: responseText });
                console.log(_this2.state.report);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('reponse : ' + this.state.report);
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    this.state.report
                )
            );
        }
    }]);
    return ResultGoogle;
}(_react2.default.Component), _class.navigationOptions = function (_ref) {
    var navigation = _ref.navigation;

    return {
        title: 'Trafic entre machin et bidule',
        tabBarIcon: function tabBarIcon() {
            return _react2.default.createElement(_reactNative.Image, { source: require('./icons/home.png'), style: { width: 30, height: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            });
        }
    };
}, _temp);
exports.default = ResultGoogle;