var React = require('react');
var markdown = require('markdown').markdown;

var Article = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    }
  },
  render: function() {
    return (
      <article className="article">
        {!this.state.expanded && this.props.text.length > 140 ? (
          <p className="pointer" onClick={this.handleClick}>{this.props.text.slice(0, 240)}... <a href="javascript:void(0)">(more)</a></p>
        ) : (
          <p className="text">{React.DOM.div({ dangerouslySetInnerHTML: {
            __html: markdown.toHTML(this.props.text.toString())
          } })}</p>
        )}
      </article>
    )
  },
  handleClick: function(e) {
    this.setState({
      expanded: !this.state.expanded
    })
  }
});

module.exports = Article;