var React = require('react');
var Router = require('react-router');
var Nav = require('./nav/Nav.js');
var Login = require('./login/Login.js');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
  mixins: [Router.State],
  render: function() {
    // this.isActive comes from Router.State mixin.
    var renderNav = this.isActive('login') || this.isActive('erp');

    return (
      <main className="tutori">
        {!renderNav && <Nav />}
        <RouteHandler />
      </main>
    )
  }
});

module.exports = Main;