var Reflux = require('reflux');
var Actions = require('../actions/Actions.js');
var request = require('superagent');

var MessageStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    setInterval(function() {
      request
        .get('http://mpa-hack.tendtoinfinity.com/api/messages')
        .end(function(err, res) {
          if (res.ok) {
            this.updateMessage(res.body);
          }
        }.bind(this));
    }.bind(this), 1000);
  },
  updateMessage: function(data) {
    this.trigger((this.last = data || {}));
  },
  getInitialState: function() {
    return this.last || [];
  }
});

module.exports = MessageStore;