import { createStore } from 'redux';
import * as reducer from './tagReducer';

export const store = createStore(reducer);