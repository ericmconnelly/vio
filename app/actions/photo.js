import * as types from '../constants/ActionTypes';


export function savePhoto(photo) {
  return {
    type: types.SAVE_PHOTO,
    photo
  };
};

export function initPhoto(photo) {
  return {
    type: types.INIT_PHOTO
  };
};
