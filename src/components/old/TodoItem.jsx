require('TodoItem.scss');

var TodoItem = React.createClass({
  toggleDone:function(){
    var id = this.props.id;
    var done = !this.props.done;
    this.props.setItemDone(id,done);
  },
  render: function() {
    var cn = "todo-item";
    if(this.props.done) cn += " done"

    return (
      <li className={cn} onClick={this.toggleDone}>
        {this.props.children}
      </li>
    );
  }
});

module.exports = TodoItem;
