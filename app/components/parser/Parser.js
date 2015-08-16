var React = require('react');
var Drag = require('../common/Drag');
var Reflux = require('reflux');
var MessageStore = require('../../stores/MessageStore.js');
var markdown = require('markdown').markdown;

var Parser = React.createClass({
  mixins: [Reflux.connect(MessageStore, 'messages')],
  render: function() {

    var message = this.state.messages.filter(function(message) {
        return message.id === this.props.params.id;
      }.bind(this))[0] || {};

    message.content && console.log(message.content.split("\n"));

    message.attachments && message.attachments.map(function(entry) {
      for (var key in entry) {
        console.log(key, entry[key]);
      }
    });

    return (
      <section className="parser">
        <header>
          <div className="from-profile">
            <div className="left">
              <div className="from-profile-img"></div>
              <div className="from-profile-name">
                <h4>Juan Gabriel</h4>
              </div>
              <div className="from-profile-email">(juangab31@gmail.com)</div>
            </div>
            <div className="right">
              <div><small>14th August 2015</small></div>
              <time><small>(11h ago)</small></time>
            </div>
          </div>
        </header>
        <main>
          <h3>{message.subject}</h3>
          <div className="article">
            {message.content && message.content.split(" ").map(function(word) {
              return (
                <Drag text={word} />
              )
            })}
          </div>
          <div className="attachment">
            <table>
              <tbody>
                {message.attachments && message.attachments.map(function(entry) {
                  var tr = [];
                  for (var key in entry) {
                    tr.push(<tr><td><Drag text={key}/></td><td><Drag text={entry[key]} /></td></tr>)
                  }
                  tr.push(<hr/>);
                  return (
                    {tr}
                  )
                })}
              </tbody>
            </table>
          </div>

        </main>
        <br/>
        <footer>
          <button type="submit" className="mui-btn mui-btn-primary">Download</button>
        </footer>
      </section>
    )
  }
});

module.exports = Parser;