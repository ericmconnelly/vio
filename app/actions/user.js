import * as types from '../constants/ActionTypes';


//redux action to save the user information when the user login
//and update the this information as user create an album
//Author: Eric Le
export function saveUser(user) {
  return {
    type: types.SAVE_USER,
    user
  };
};
