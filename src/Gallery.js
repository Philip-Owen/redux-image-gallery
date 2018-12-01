import React, { Component } from 'react';
import Image from './Image';

export default class Gallery extends Component {
	render() {
		return (
			<div>
				<h1>Gallery</h1>
				<div className="gallery-container">
          <Image />
				</div>
			</div>
		);
	}
}
