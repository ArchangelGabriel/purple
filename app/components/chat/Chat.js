var React = require('react');

var Chat = React.createClass({
  render: function() {
    return (
      <section className="chat">
        <aside>
          <div className="thread-list">
            <div className="thread-item">
              <img src="" alt="" className="profile-picture"/>
              <div className="profile-info">
                <div className="username"></div>
                <div className="last-time"></div>
              </div>
              <div className="last-message"></div>
            </div>
          </div>
        </aside>
        <main>
          <div className="thread-contents">
            <div className="message">

            </div>
          </div>
        </main>
      </section>
    )
  }
});

module.exports = Chat;
