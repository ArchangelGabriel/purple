var Reflux = require('reflux');

var Actions = Reflux.createActions({
  "login": {children: ["completed", "failed"]},
  "actions": {}
});

module.exports = Actions;