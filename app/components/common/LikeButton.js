var React = require('react');
var classNames = require('classnames');

var LikeButton = React.createClass({
  propTypes: {
    liked     : React.PropTypes.bool.isRequired,
    createLike: React.PropTypes.func.isRequired,
    deleteLike: React.PropTypes.func.isRequired
  },

  render: function() {
    var buttonClass = classNames({
      'like-button': true,
      'liked'        : this.props.liked
    });
    var iconClass = classNames({
      'fa'        : true,
      'fa-heart-o': !this.props.liked,
      'fa-heart'  : this.props.liked
    });
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        <i className={iconClass}></i>
      </button>
    )
  },

  handleClick: function() {
    this.props.liked ? this.props.createLike() : this.props.deleteLike();
  }
});

module.exports = LikeButton;