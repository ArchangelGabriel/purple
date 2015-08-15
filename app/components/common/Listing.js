var React = require('react');
var Article = require('./Article.js');
var LikeButton = require('./LikeButton.js');
var ChatButton = require('./ChatButton.js');

var Listing = React.createClass({
  propTypes: {
    listing: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <section className="listing">
        <header>
          <h2>Lorem ipsum dolor.</h2>
          <div>Lorem ipsum dolor sit amet, consectetur.</div>
        </header>
        <Article text={this.props.listing.text}/>
        <footer>
          <LikeButton liked={false}
                      createLike={this.createLike}
                      deleteLike={this.deleteLike} />

          <ChatButton />
        </footer>
      </section>
    )
  },

  createLike: function() {
    console.log('I like!');
  },

  deleteLike: function() {
    console.log('I dislike!');
  }
});

module.exports = Listing;