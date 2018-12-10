import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'
import H1 from './reducerModule/H1'
const reducer =  combineReducers({
    input:H1
});
export default reducer