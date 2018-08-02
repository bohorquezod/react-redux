import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/';
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
	reducer,
	map(),	// initialState
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	composeWithDevTools(
		applyMiddleware(
			logger,
			thunk
		)
	)
)

const homeContainer = document.getElementById('home-container')


const App = (
	<Provider store={store}>
		<Home/>
	</Provider>
)
render( App, homeContainer);

