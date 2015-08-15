var React = require('react');
var MUIFormGroup = require("../../../node_modules/muicss/src/react/forms.jsx").FormGroup;

var Teach = React.createClass({
  render: function () {
    return (
      <section className="teach">
        <header>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="mui-form-group">
                <input type="text" className="mui-form-control"/>
                <label>Input 1</label>
              </div>
              <div className="mui-form-group">
                <input type="text" className="mui-form-control"/>
                <label>Input 2</label>
              </div>
              <div className="mui-form-group">
                <textarea className="mui-form-control"></textarea>
                <label>Textarea</label>
              </div>
            </div>
            <button type="submit" className="mui-btn mui-btn-primary">Submit</button>
          </form>
        </main>
      </section>
    )
  },
  handleSubmit: function (e) {
    e.preventDefault();
    console.log('submitted');
  }
});

module.exports = Teach;