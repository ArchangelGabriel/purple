require('./styles/App.scss');
var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});