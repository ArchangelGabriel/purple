var React = require('react');
var Listing = require('../common/Listing.js');

var Index = React.createClass({
  render: function() {
    var x = [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consectetur doloribus esse exercitationem fuga id necessitatibus qui quis voluptate. Accusamus ad asperiores autem blanditiis dicta doloribus ea eius eum fugiat incidunt laboriosam, laborum magni, modi, praesentium quae quas tempora tempore unde velit vitae. Aperiam enim eos eum fugit id laborum minima, reiciendis, repellendus reprehenderit sequi ut vitae voluptates voluptatum? A accusantium amet asperiores, aspernatur cumque cupiditate deleniti dolore earum eos eum id incidunt ipsum labore laudantium magnam magni nemo nesciunt officiis pariatur perferendis placeat quae quas qui, quia quibusdam quisquam quod repellendus sint, tempore totam veniam veritatis vero voluptatem. Cum deleniti, mollitia nesciunt numquam quisquam ut voluptatum. At corporis ducimus in non perspiciatis praesentium quae quam quos, voluptas. Aperiam aut autem dolor, eligendi, et excepturi inventore iusto laborum natus neque non placeat quae voluptatem? Aperiam autem eligendi laboriosam sapiente!',
      liked: false
    },{
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consectetur doloribus esse exercitationem fuga id necessitatibus qui quis voluptate. Accusamus ad asperiores autem blanditiis dicta doloribus ea eius eum fugiat incidunt laboriosam, laborum magni, modi, praesentium quae quas tempora tempore unde velit vitae. Aperiam enim eos eum fugit id laborum minima, reiciendis, repellendus reprehenderit sequi ut vitae voluptates voluptatum? A accusantium amet asperiores, aspernatur cumque cupiditate deleniti dolore earum eos eum id incidunt ipsum labore laudantium magnam magni nemo nesciunt officiis pariatur perferendis placeat quae quas qui, quia quibusdam quisquam quod repellendus sint, tempore totam veniam veritatis vero voluptatem. Cum deleniti, mollitia nesciunt numquam quisquam ut voluptatum. At corporis ducimus in non perspiciatis praesentium quae quam quos, voluptas. Aperiam aut autem dolor, eligendi, et excepturi inventore iusto laborum natus neque non placeat quae voluptatem? Aperiam autem eligendi laboriosam sapiente!',
      liked: false
    }];
    return (
      <section className="index">
        <aside>

        </aside>
        <main>
          {x.map(function(val) {
            return (
              <Listing listing={val}/>
            )
          })}
        </main>
      </section>
    )
  }
});

module.exports = Index;