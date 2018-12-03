import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import Gallery from './Gallery';
import Upload from './Upload';

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
					<Upload />
					<Gallery images={this.state.images} />
				</div>
			</Provider>
		);
	}
}
