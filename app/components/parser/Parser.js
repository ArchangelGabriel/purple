var React = require('react');
var Drag = require('../common/Drag');

var Parser = React.createClass({
  render: function() {
    var wordList = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, veniam.".split(" ");
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
          <h3>Lorem ipsum dolor sit.</h3>
          {wordList.map(function(word) {
            return (
              <Drag text={word} />
            )
          })}
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