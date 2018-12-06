import { createStore } from 'redux'
import reducer from './reducer'
console.log(process.env);
if(process.env.NODE_ENV=="development"){
    var store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}else {
    var store = createStore(
        reducer
    )
}
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
export default store