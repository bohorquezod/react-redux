import React, { Component } from 'react'
import Media from '../components/media'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions';

class MediaContainer extends Component {
	openModal = mediaId => {
		this.props.actions.openModal(mediaId)
	} 

	render() {
		return (
			<Media 
				openModal={this.openModal}
				title={this.props.data.get('title')}
				author={this.props.data.get('author')}
				type={this.props.data.get('type')}
				cover={this.props.data.get('cover')}
				src={this.props.data.get('src')}
				id={this.props.data.get('id')}
				category={this.props.data.get('category')}
			/>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		data: state.get('data').get('entities').get('media').get(props.id)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)