import React, { Component } from 'react';
import Gallery from './Gallery';
import Upload from './Upload';

export default class App extends Component {
	state = {
		images: [],
  };
  addImage = (imageUrl) => {
    const images = this.state.images;
    this.setState({images: [...images, imageUrl]});
  }
	render() {
		return (
			<div>
				<Upload addImage={this.addImage}/>
				<Gallery />
			</div>
		);
	}
}
