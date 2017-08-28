import { combineReducers } from 'redux';

const tags =  (state=[], action) => {
    switch(action.type) {
        case 'GET_TAGS':
            return [
                action.tags,
                ...state
            ]
        default:
            return state;
    }
}

export const reducer = combineReducers({tags});