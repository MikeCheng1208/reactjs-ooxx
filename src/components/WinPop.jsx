var classNames = require('classnames');
var WinPop = React.createClass({
    resetFn: function () {
		this.props.onReSet();
	},
    render: function () {
		var classes = classNames({
			winpop: true,
			oo: this.props.winState === "O",
			xx: this.props.winState === "X",
        });
        console.log("win:", this.props.win);
        return (
            <div className={classes}>
                <h1>WIN!!!</h1>
                <a onClick={this.resetFn}>再玩一次</a>
            </div>
		)
	}
});
module.exports = WinPop;
  