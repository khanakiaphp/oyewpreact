(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(/*! ./Nav */ "./src/components/Nav/index.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _Header = __webpack_require__(/*! ./Header */ "./src/components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Article = __webpack_require__(/*! ./Article */ "./src/components/Article/index.js");

var _Article2 = _interopRequireDefault(_Article);

var _TheContent = __webpack_require__(/*! ./TheContent */ "./src/components/TheContent/index.js");

var _TheContent2 = _interopRequireDefault(_TheContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var App = function (_Component) {
    (0, _inherits3['default'])(App, _Component);

    function App(props) {
        (0, _classCallCheck3['default'])(this, App);
        return (0, _possibleConstructorReturn3['default'])(this, (App.__proto__ || (0, _getPrototypeOf2['default'])(App)).call(this, props));
    }

    (0, _createClass3['default'])(App, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                console.log(this.props);
            }

            return componentDidMount;
        }()
    }, {
        key: 'getBlockComponent',
        value: function () {
            function getBlockComponent(block) {
                switch (block.type) {
                    case 'header':
                        return _react2['default'].createElement(_Header2['default'], (0, _extends3['default'])({ key: block.id }, block.data));

                    case 'footer':
                        return _react2['default'].createElement(_Footer2['default'], (0, _extends3['default'])({ key: block.id }, block.data));

                    case 'navbar':
                        return _react2['default'].createElement(_Nav2['default'], (0, _extends3['default'])({ key: block.id }, block.data));

                    case 'article':
                        return _react2['default'].createElement(_Article2['default'], (0, _extends3['default'])({ key: block.id }, block.data));

                    case 'the_content':
                        return _react2['default'].createElement(_TheContent2['default'], (0, _extends3['default'])({ key: block.id }, block.data));

                    default:
                        return null;
                }
            }

            return getBlockComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                return _react2['default'].createElement(
                    'div',
                    null,
                    this.props.components.map(function (block) {
                        return _this2.getBlockComponent(block);
                    })
                );
            }

            return render;
        }()
    }]);
    return App;
}(_react.Component);

exports['default'] = App;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Article/index.js":
/*!*****************************************!*\
  !*** ./src/components/Article/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Article = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(Article, _Component);

    function Article(props) {
        (0, _classCallCheck3["default"])(this, Article);
        return (0, _possibleConstructorReturn3["default"])(this, (Article.__proto__ || (0, _getPrototypeOf2["default"])(Article)).call(this, props));
    }

    (0, _createClass3["default"])(Article, [{
        key: "render",
        value: function () {
            function render() {
                // console.log(this.props)
                return _react2["default"].createElement(
                    "div",
                    { className: "container" },
                    _react2["default"].createElement(
                        "div",
                        { className: "row" },
                        _react2["default"].createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2["default"].createElement("div", { className: "article", dangerouslySetInnerHTML: { __html: this.props.article } })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return Article;
}(_react.Component), _class.defaultProps = {
    html: null,
    article: null
}, _temp);
exports["default"] = Article;
module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Footer = function (_Component) {
    (0, _inherits3['default'])(Footer, _Component);

    function Footer(props) {
        (0, _classCallCheck3['default'])(this, Footer);
        return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || (0, _getPrototypeOf2['default'])(Footer)).call(this, props));
    }

    (0, _createClass3['default'])(Footer, [{
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'footer',
                    null,
                    'Footer'
                );
            }

            return render;
        }()
    }]);
    return Footer;
}(_react.Component);

exports['default'] = Footer;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_Component) {
    (0, _inherits3['default'])(Header, _Component);

    function Header(props) {
        (0, _classCallCheck3['default'])(this, Header);
        return (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || (0, _getPrototypeOf2['default'])(Header)).call(this, props));
    }

    // componentDidMount() {
    //     console.log('header mount')
    // }

    // componentDidUpdate() {
    //     console.log('header update')
    // }

    // handleClick() {
    //     alert('clickced')
    // }

    (0, _createClass3['default'])(Header, [{
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'header',
                    null,
                    _react2['default'].createElement(
                        'h5',
                        null,
                        'Header'
                    )
                );
            }

            return render;
        }()
    }]);
    return Header;
}(_react.Component);

exports['default'] = Header;
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Nav = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(Nav, _Component);

    function Nav(props) {
        (0, _classCallCheck3["default"])(this, Nav);
        return (0, _possibleConstructorReturn3["default"])(this, (Nav.__proto__ || (0, _getPrototypeOf2["default"])(Nav)).call(this, props));
    }

    (0, _createClass3["default"])(Nav, [{
        key: "render",
        value: function () {
            function render() {
                // console.log(this.props)
                return _react2["default"].createElement(
                    "div",
                    { className: "navbarContainer" },
                    _react2["default"].createElement(
                        "div",
                        { className: "siteBranding" },
                        "MODULAA"
                    ),
                    _react2["default"].createElement("div", { className: "nav", dangerouslySetInnerHTML: { __html: this.props.html } })
                );
            }

            return render;
        }()
    }]);
    return Nav;
}(_react.Component), _class.defaultProps = {
    html: null
}, _temp);
exports["default"] = Nav;
module.exports = exports["default"];

/***/ }),

/***/ "./src/components/TheContent/index.js":
/*!********************************************!*\
  !*** ./src/components/TheContent/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Article = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(Article, _Component);

    function Article(props) {
        (0, _classCallCheck3["default"])(this, Article);
        return (0, _possibleConstructorReturn3["default"])(this, (Article.__proto__ || (0, _getPrototypeOf2["default"])(Article)).call(this, props));
    }

    (0, _createClass3["default"])(Article, [{
        key: "render",
        value: function () {
            function render() {
                // console.log(this.props)
                return _react2["default"].createElement(
                    "div",
                    { className: "container" },
                    _react2["default"].createElement(
                        "div",
                        { className: "row" },
                        _react2["default"].createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2["default"].createElement("div", { className: "article", dangerouslySetInnerHTML: { __html: this.props.html } })
                        )
                    )
                );
            }

            return render;
        }()
    }]);
    return Article;
}(_react.Component), _class.defaultProps = {
    html: null
}, _temp);
exports["default"] = Article;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _App = __webpack_require__(/*! ./components/App */ "./src/components/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (!global.setTimeout) {
    global.setTimeout = function () {};
}
if (!global.clearTimeout) {
    global.clearTimeout = function () {};
}
global.React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
global.ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
global.ReactDOMServer = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

// import Header from './header'
// global.Header = Header

global.App = _App2['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/D/www/php/demo_wordpress/wp-content/themes/modulaa/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main","vendor"]]]);
//# sourceMappingURL=main.js.map