var TodoItem = require('TodoItem');
require('TodoList.scss');

var TodoList = React.createClass({
  render: function() {
    var setItemDone = this.props.setItemDone
    return (
      <ul className="todo-list">
        {
          this.props.data.map(function(item){
            return (
              <TodoItem
                key  = {item.id}
                id   = {item.id}
                done = {item.done}
                setItemDone = {setItemDone}
                >
                {item.text}
              </TodoItem>
            );
          })
        }
      </ul>
    );
  }
});


module.exports = TodoList;
