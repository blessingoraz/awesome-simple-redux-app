import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/tagReducer';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}
export const store = configureStore();