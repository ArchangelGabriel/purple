var React = require('react');
var Navigation = require('react-router').Navigation;
var Article = require('../common/Article.js');
var Reflux = require('reflux');
var MessageStore = require('../../stores/MessageStore.js');
var Actions = require('../../actions/Actions.js');
var Link = require('react-router').Link;

var Messages = React.createClass({
  mixins: [Navigation, Reflux.connect(MessageStore, "messages")],
  render: function() {
    return (
      <section className="messages">
        {this.state.messages.map(function(message, i) {
          return (
            <article key={i} className="message">
              <header>
                <h3><i className="fa fa-envelope"></i> {message.subject}</h3>
              </header>
              <main>
                <Article text={message.content}/>
                <button onClick={() => this.transitionTo('message', {id: message.id})}
                        type="submit"
                        className="mui-btn mui-btn-primary">View Message</button>
              </main>
            </article>
          )
        }.bind(this))}
      </section>
    )
  }
});

module.exports = Messages;