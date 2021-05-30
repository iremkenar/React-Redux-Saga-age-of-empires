import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import unitsSaga from '../redux-saga/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // mount it on the Store
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // then run the saga
  sagaMiddleware.run(unitsSaga);

  // render the application

  return store;
}
