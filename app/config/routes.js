var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Main = require('../components/Main.js');
var Chat = require('../components/chat/Chat.js');
var Index = require('../components/index/Index.js');
var Messages = require('../components/messages/Messages.js');
var Parser = require('../components/parser/Parser.js');
var ERP = require('../components/erp/ERP.js');
var Teach = require('../components/teach/Teach.js');
var Login = require('../components/login/Login.js');

var routes = (
  <Route handler={Main}>
    <Route name="messages" path="messages" handler={Messages} />
    <Route name="parser" path="parser" handler={Parser} />
    <Route name="erp" path="erp" handler={ERP} />

    <Route name="teach" path="teach" handler={Teach} />
    <Route name="login" path="login" handler={Login} />
    <Route name="chat" path="chat" handler={Chat} />

    <Route name="index" path="/" handler={Index}/>
    <Redirect to="messages"/>
  </Route>
);

module.exports = routes;