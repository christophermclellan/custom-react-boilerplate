import rootReducer from './reducers.js';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './containers/SampleContainer/sagas';
import { routerMiddleware } from 'react-router-redux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, history) {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    compose(...enhancers)
  );

  sagaMiddleware.run(mySaga);

  return store;
}