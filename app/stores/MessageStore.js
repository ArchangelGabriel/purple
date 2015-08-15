var Reflux = require('reflux');
var Actions = require('../actions/Actions.js');
var request = require('superagent');

var MessageStore = Reflux.createStore({
  listenables: Actions,
  getInitialState: function() {
    this.onFetchMessages();
  },
  onFetchMessages: function() {
    request
      .get('http://mpa-hack.tendtoinfinity.com/api/messages')
      .end(function(err, res) {
        if (res.ok) {
          this.trigger(res.body);
        }
      }.bind(this))
  }
});

module.exports = MessageStore;