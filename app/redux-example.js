import { createStore } from 'redux'
import React from 'react';
import axios from 'axios';

const reducer = (state = {name: "Defaul"}, action) => {
	return state;
}

const store = createStore(reducer);
console.log(store);
console.log(store.getState());