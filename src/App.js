import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import Gallery from './Gallery';
import Upload from './Upload';

const store = createStore(rootReducer, {}, composeWithDevTools());

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Upload />
					<Gallery />
				</div>
			</Provider>
		);
	}
}
