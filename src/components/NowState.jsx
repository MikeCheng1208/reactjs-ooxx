var NowState = React.createClass({
    render: function () {
        var str = this.props.state ? str = "圈圈" : str = "叉叉";
        return (
            <div className="nowStateBox">
                <p>目前該誰：{str}</p>
            </div>
		);
	}
});
module.exports = NowState;
  