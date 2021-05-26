import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import TestApp from './components/TestApp'

const store = configureStore()

console.log('initial', store.getState())

 store.subscribe(()=>{
   console.log('updated store', store.getState())
 })
ReactDOM.render(<Provider store={store}>
                    <BrowserRouter> <App /> </BrowserRouter>
                </Provider>, document.getElementById('root'));

// ReactDOM.render(<TestApp/>, document.getElementById('root'));


