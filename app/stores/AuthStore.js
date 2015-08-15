var Reflux = require('reflux');
var Actions = require('../actions/Actions.js');

var AuthStore = Reflux.createStore({
  listenables: Actions,
  onLogin: function(phoneNumber, password) {},
  onLoginCompleted: function() {},
  onLoginFailed: function() {}
});

module.exports = AuthStore;