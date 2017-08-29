import { combineReducers } from 'redux';

const tags = (state = {tags: []}, action) => {
  switch (action.type) {
    case 'SET_FETCHED_TAGS': {
      const {tags} = action;
      return {...state, tags: tags };
    }
    default:
      return state;
  }
}

export default combineReducers({ tags });