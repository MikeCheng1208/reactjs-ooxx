require('TodoInput.scss');
var TodoInput = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },
  onChange:function(e){
    this.setState({
      text: e.target.value
    });
  },
  onSubmit:function(e){
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({text:''});
  },
  render: function() {
    return (
      <form className="todo-input" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.text}/>
      </form>
    );
  }
});


module.exports = TodoInput;
