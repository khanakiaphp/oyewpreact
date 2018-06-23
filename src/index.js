if (!global.setTimeout) {
    global.setTimeout = function() {};
}
if (!global.clearTimeout) {
    global.clearTimeout = function() {};
}
global.React = require('react');
global.ReactDOM = require('react-dom');
global.ReactDOMServer = require('react-dom/server');

// import Header from './header'
// global.Header = Header

import App from './components/App'
global.App = App