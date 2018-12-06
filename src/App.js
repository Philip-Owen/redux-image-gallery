import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import styled from 'styled-components';
import rootReducer from './rootReducer';
import Gallery from './Gallery';
import Upload from './Upload';

const store = createStore(rootReducer, {}, composeWithDevTools());

const App = () => (
	<Provider store={store}>
		<AppContainer>
			<Upload />
			<Gallery />
		</AppContainer>
	</Provider>
);

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default App;
