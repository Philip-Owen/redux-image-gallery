import React, { Component } from 'react';
import Gallery from './Gallery';
import Upload from './Upload';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, {}, composeWithDevTools());

export default class App extends Component {
	state = {
		images: [],
	};
	addImage = imageUrl => {
		const images = this.state.images;
		this.setState({ images: [...images, imageUrl] });
	};
	render() {
		return (
			<Provider store={store}>
				<div>
					<Upload addImage={this.addImage} />
					<Gallery images={this.state.images} />
				</div>
			</Provider>
		);
	}
}
