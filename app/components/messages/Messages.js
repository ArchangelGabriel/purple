var React = require('react');
var Article = require('../common/Article.js');

var Messages = React.createClass({

  render: function() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias architecto assumenda autem corporis cum eaque eligendi, error est explicabo facere ipsa ipsam iure, laboriosam libero modi odio pariatur perspiciatis quae quaerat quas sint totam unde vero voluptas voluptatem voluptates. Autem earum est pariatur repudiandae vel vero voluptate voluptates! Itaque?";
    return (
      <section className="messages">
        <h3>New messages to juangab31@gmail.com</h3>
        <article className="message">
          <header>
            <i className="fa fa-archive"></i> <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
          </header>
          <main>
            <Article text={text}/>
            <button type="submit" className="mui-btn mui-btn-primary">View Message</button>
          </main>
        </article>
        <article className="message">
          <header>
            <i className="fa fa-archive"></i> <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
          </header>
          <main>
            <Article text={text}/>
            <button type="submit" className="mui-btn mui-btn-primary">View Message</button>
          </main>
        </article>
        <article className="message">
          <header>
            <i className="fa fa-archive"></i> <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
          </header>
          <main>
            <Article text={text}/>
            <button type="submit" className="mui-btn mui-btn-primary">View Message</button>
          </main>
        </article>
        <article className="message">
          <header>
            <i className="fa fa-archive"></i> <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
          </header>
          <main>
            <Article text={text}/>
            <button type="submit" className="mui-btn mui-btn-primary">View Message</button>
          </main>
        </article>
      </section>
    )
  }
});

module.exports = Messages;