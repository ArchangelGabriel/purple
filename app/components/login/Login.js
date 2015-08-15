var React = require('react');
var Navigation = require('react-router').Navigation;
var Actions = require('../../actions/Actions.js');

var Login = React.createClass({
  mixins: [Navigation],
  render: function() {
    return (
      <section className="login">
        <form className="login-form mui-panel" onSubmit={this.handleSubmit}>
          <h2 className="center">Login to Purple</h2>
          <div className="mui-form-group">
            <input ref="phoneNumber" type="text" className="mui-form-control" placeholder="Phone number" required/>
          </div>
          <div className="mui-form-group">
            <input ref="password" type="password" className="mui-form-control" placeholder="Password" required/>
          </div>
          <button type="submit" className="mui-btn mui-btn-primary full-width">Submit</button>
          <div><small>Don't have an account? <a href="javascript:void(0)">Register</a>.</small></div>
        </form>
      </section>
    )
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = React.findDOMNode(this.refs.phoneNumber).value;
    var password = React.findDOMNode(this.refs.password).value;
    console.log(username, password);
  }
});

module.exports = Login;