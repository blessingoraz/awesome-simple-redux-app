import { combineReducers } from 'redux';

import AT from '../actions/ActionTypes';

const tagsReducer = (state = { tags: [], error: '', loading: false }, action) => {
  const { tags, error } = action;
  switch (action.type) {
    case AT.FETCH_TAGS:
      return state
    case AT.GET_FETCHED_TAGS:
      return { ...state, loading: true }
    case AT.SET_FETCHED_TAGS: {
      return { ...state, tags: tags, loading: false };
    }
    case AT.SET_TAG_ERROR:
      return { error: error, loading: false}
    default:
      return state;
  }
}

export default combineReducers({ tagsReducer });