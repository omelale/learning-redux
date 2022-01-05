import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";

//first thing we need is the store, which is the container for all the states i want to save

//second thing we need is an action, which describes actions that can be performed on saved states in the store
const increment = () => {
    return {
    //    people here put the name of the action
        type : 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}

//third thing is the reducer, which describe how the actions transform the state into next state

//final step is dispatch, that executes the action (dispatch action to reducer)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
