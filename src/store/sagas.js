// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { put,takeEvery } from 'redux-saga/effects'
import { INIT_SAGA_LIST_DATA } from './actionsType'
import { getCompany } from '../config/api'
import { initListData } from './actionsCreators'
function* getInitSagaDate(p){
    console.log('sagaaaaa:',p)
    try{
        const res = yield getCompany()
        const action = initListData(res.data);
        console.log('saga:90',action)
        yield put(action)
    }catch(e){
        console.log('网络请求失败、超时')
    }
}
function* mySaga() {
    yield takeEvery(INIT_SAGA_LIST_DATA, getInitSagaDate);
  }
  
  export default mySaga;