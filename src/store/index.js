import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
import toDoSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(toDoSaga)

export default store