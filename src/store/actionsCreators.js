import { CHANGE_INPUT_VALUE,ADD_TOFO_ITEM,CHANGE_SELECT_VALUE,CHANGE_BUTTON_SWITCH,INIT_LIST_DATA } from './actionsType'
import { getCompany } from '../config/api'

export const changeInputValue = (value)=>(
    {
        type:CHANGE_INPUT_VALUE,
        value
    }
)
export const addTodoItem = (value)=>(
    {
        type:ADD_TOFO_ITEM,
        value
    }
)
export const changeSelectItem = (value)=>(
    {
        type:CHANGE_SELECT_VALUE,
        value
    }
)
export const changeButtonSwitch = (value)=>(
    {
        type:CHANGE_BUTTON_SWITCH,
        value
    }
)
export const initListData = (value) =>(
    {
        type:INIT_LIST_DATA,
        value
    }
)
//这里为什么可以是函数了
//因为redux-thunk 的作用即是将 action 从一个对象变成一个函数
export const getTodoData = () => {
    return (dispatch) =>{
        getCompany()
        .then(res=>{
            dispatch(initListData(res.data))
            console.log('我是dispatch',res);
        })
    }
}
