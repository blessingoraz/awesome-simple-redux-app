import { combineReducers } from 'redux';

import AT from '../actions/ActionTypes';

const tagsReducer = (state = { tags: [], loading: false }, action) => {
  switch (action.type) {
    case AT.FETCH_TAGS:
      return state
    case AT.GET_FETCHED_TAGS:
      return { ...state, loading: true }
    case AT.SET_FETCHED_TAGS: {
      const { tags } = action;
      return { ...state, tags: tags, loading: false };
    }
    default:
      return state;
  }
}

export default combineReducers({ tagsReducer });