import React, { Component } from 'react';

export default class Upload extends Component {
	state = {
		imageUrl: '',
	};
	handleChange = e => {
		const imageUrl = e.target.value;
		this.setState({ imageUrl });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addImage(this.state.imageUrl);
		e.target.reset();
		this.setState({ imageUrl: '' });
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Image URL" onChange={this.handleChange} />
					<button>Add to Gallery</button>
				</form>
			</div>
		);
	}
}
