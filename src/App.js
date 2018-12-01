import React, { Component } from 'react';
import Gallery from './Gallery';
import Upload from './Upload';

export default class App extends Component {
	render() {
		return (
      <div>
        <Upload />
        <Gallery />
			</div>
		);
	}
}
