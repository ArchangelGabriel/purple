var React = require('react');
var Drop = require('../common/Drop.js');

var ERP = React.createClass({
  render: function () {
    return (
      <section className="erp">
        <table>
          <thead>
          <h2>Sample ERP</h2>
          </thead>
          <tbody>
          <tr>
            <td>Item code:</td>
            <td><Drop placeholder="Item code" type="text"/></td>
          </tr>
          <tr>
            <td>Item description:</td>
            <td><Drop type="textarea" placeholder="Item description"/></td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>
              <select name="CategoryID" onchange="ReloadForm(ItemForm.UpdateCategories)">
                <option selected="selected" value="345345">345345345</option>
                <option selected="selected" value="AC">ACCESSORIES CELLULARI</option>
                <option selected="selected" value="ARTE">Art</option>
                <option selected="selected" value="ASSY">assembly</option>
                <option selected="selected" value="ASSETS">Asset Disposals</option>
              </select>
              <a href="javascript: void(0)">Add or change inventory categories</a>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    )
  }
});

module.exports = ERP;