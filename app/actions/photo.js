import * as types from '../constants/ActionTypes';

//redux action to save photo to state container when user perform a search
//Author: Eric Le
export function savePhoto(photo) {
  return {
    type: types.SAVE_PHOTO,
    photo
  };
};

//redux action initialize the state container to have empty array of photo
//Author: Eric Le
export function initPhoto(photo) {
  return {
    type: types.INIT_PHOTO
  };
};
