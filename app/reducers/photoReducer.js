//The reducers of photos that take in an old state and return
//a new state

//SAVE PHOTO: update the photo state to have a new collectiob of photo
//INIT PHOTO: create an empty collection of photo
//Author: Eric Le
import {  SAVE_PHOTO, INIT_PHOTO} from '../constants/ActionTypes';

const initialState = {};

export default function photoReducer(state=initialState, action) {
  // DO NOT mutate the state, return a NEW state

  switch (action.type) {

    case SAVE_PHOTO:
      return Object.assign({}, state, { photo: action.photo });

    case INIT_PHOTO:
      return [];

    default:
      return state;
  }

};
