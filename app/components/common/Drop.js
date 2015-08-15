var React = require('react');

var Drop = React.createClass({
  render: function() {
    if (this.props.type == 'textarea') return (
      <textarea {...this.props}
        ref="input"
        onDragOver={(event) => event.preventDefault()}
        onDrop={this.onDrop}></textarea>
    );

    return (
      <input {...this.props}
             ref="input"
             onDragOver={(event) => event.preventDefault()}
             onDrop={this.onDrop} />
    )
  },
  onDrop: function(event) {
    event.preventDefault();

    var data;

    try {
      data = JSON.parse(event.dataTransfer.getData('text'));
    } catch (e) {
      return;
    }

    React.findDOMNode(this.refs.input).value = React.findDOMNode(this.refs.input).value + data;
  }
});

module.exports = Drop;