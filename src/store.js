import { createStore } from 'redux';
import { reducer } from './tagReducer';

export const store = createStore(reducer);