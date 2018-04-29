import React from "react";
import PropTypes from 'prop-types';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.data["im:name"].label;
		const artist = this.props.data["im:artist"].label;
		return (
			<div className="parent">
				<img src={this.props.data["im:image"][2].label}/>
				<div className="heading">{this.props.index}</div>
				<div className="truncate">{name}</div>
				<div className="truncate">{artist}</div>
			</div>
		)
	}
}

Item.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};