import React, { Component } from 'react';
import Gallery from './Gallery';
import Upload from './Upload';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
	images: [],
};

const reducer = function(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case 'ADD_IMAGE':
			console.log('From ADD_IMAGE reducer');
			break;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	reducer,
});

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
