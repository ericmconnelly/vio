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
