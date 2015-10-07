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
