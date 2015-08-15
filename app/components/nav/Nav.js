var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="nav">
        <div className="brand">
          <a className="link" href="#">Pur.pl</a>
        </div>
        <div className="navigation">
          <Link className="link" to="messages">Messages</Link>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;