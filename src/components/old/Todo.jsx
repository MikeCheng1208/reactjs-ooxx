require('Todo.scss');

var TodoInput = require('TodoInput');
var TodoList = require('TodoList');



var Todo = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {id:1, done:false, text:'買一瓶醬油'},
        {id:2, done:true,  text:'買六個雞蛋'}
      ]
    };
  },
  addItem: function(text){
    var data = this.state.data.concat({
      id: this.state.data.length+1,
      done: false,
      text: text
    });
    this.setState({data:data})
  },

  setItemDone: function(id, done){
    for(var i in this.state.data){
      var item = this.state.data[i];
      if(item.id===id){
        item.done = done;
        break;
      }
    }
    this.forceUpdate();
  },

  render: function() {
    console.log('a');
    return (
      <div className="todo">
        <h1>採買清單</h1>
        <TodoInput addItem={this.addItem}/>
        <TodoList data={this.state.data} setItemDone={this.setItemDone}/>
      </div>
    );
  }
});

module.exports = Todo;
