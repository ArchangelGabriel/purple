var React = require('react');

var Drag = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span ref="span"
            className="drag"
            draggable="true"
            onDragStart={this.onDragStart}><small>{this.props.text}</small></span>
    )
  },
  onDragStart: function(event) {
    event.dataTransfer.setData('text', JSON.stringify(this.props.text));
  }
});

module.exports = Drag;