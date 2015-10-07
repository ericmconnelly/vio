//The reducers of user that take in an old state and return
//a new state for the user

//SAVE USER: update the user state to have a new information about a user
//this include new photos being added to album or new albumn being created
//Author: Eric Le

import {  SAVE_USER } from '../constants/ActionTypes';

const initialState = {};

export default function userReducer(state=initialState, action) {
  // DO NOT mutate the state, return a NEW state

  switch (action.type) {

    case SAVE_USER:
      return Object.assign({}, state, { info: action.user });

    default:
      return state;

  }

};
