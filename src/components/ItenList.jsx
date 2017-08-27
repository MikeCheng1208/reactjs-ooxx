var classNames = require('classnames');
var ItenList = React.createClass({
	setOoxx: function () {
		this.props.setOoxxData(this.props.data.id);
	},
	render: function () {
		var classes = classNames({
			ox_item: true,
			oo: this.props.data.state === 1,
			xx: this.props.data.state === -1,
		});
		return (
			<div className={classes}
				onClick={this.setOoxx}
			>
				{
					//this.props.data.id
				}
			</div>
		);
	}
});
module.exports = ItenList;
  