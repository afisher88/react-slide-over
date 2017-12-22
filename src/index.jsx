import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers';
import AnimalList from './components/AnimalList';

const rootReducer = combineReducers({...reducers})
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <AnimalList />
    </Provider>,
    document.querySelector('#app')
)