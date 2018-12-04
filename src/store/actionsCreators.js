import { CHANGE_INPUT_VALUE,ADD_TOFO_ITEM,CHANGE_SELECT_VALUE } from './actionsType'


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