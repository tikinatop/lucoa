// @flow

export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';


export function create(text) {
  return {
    type: CREATE_TODO,
    text
  };
}

export function remove(index) {
  return {
    type: CHECK_TODO,
    index
  };
}


export function check(index) {
  return {
    type: CHECK_TODO,
    index
  };
}
