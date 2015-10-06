import * as types from '../constants/ActionTypes';


export function saveUser(user) {
  return {
    type: types.SAVE_USER,
    user
  };
};
