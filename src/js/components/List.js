import React from "react";
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions';
import Item from './Item';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.albums.items
			&& this.props.albums.items.feed
			&& this.props.albums.items.feed.entry.length > 0) {
			return this.props.albums.items.feed.entry.map((item, index) => {
				return <Item key={index} index={index + 1} data={item} />
			});
		}
		return (
			<div>Loading...</div>
		);
	}

	componentDidMount() {
		this.props.fetchAlbums();
	}
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAlbums: function() {
      dispatch(fetchAlbums());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);