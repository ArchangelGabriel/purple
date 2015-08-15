var React = require('react');
var Article = require('../common/Article.js');
var Reflux = require('reflux');
var MessageStore = require('../../stores/MessageStore.js');
var Actions = require('../../actions/Actions.js');
var Link = require('react-router').Link;

var Messages = React.createClass({
  mixins: [Reflux.connect(MessageStore, "messages")],
  render: function() {
    var messages = this.state.messages;
    return (
      <section className="messages">
        <h3>New messages to juangab31@gmail.com</h3>
        {messages && messages.map(function(message, i) {
          return (
            <article key={i} className="message">
              <header>
                <i className="fa fa-archive"></i> <strong>{message.subject}</strong>
              </header>
              <main>
                <Article text={message.content}/>
                <Link to="message" params={{id: message.id}} type="submit" className="mui-btn mui-btn-primary">View Message</Link>
              </main>
            </article>
          )
        })}
      </section>
    )
  }
});

module.exports = Messages;