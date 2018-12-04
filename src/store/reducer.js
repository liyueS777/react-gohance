import {
    CHANGE_INPUT_VALUE,
    ADD_TOFO_ITEM,
    CHANGE_SELECT_VALUE
} from "./actionsType";
const defaultStore = {
    inputValue: '123',
    list: [1, 2, 3],
    selectValue: ''
}

export default (state = defaultStore, action) => {
    console.log('reducer:', state, action);
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            const tempState = JSON.parse(JSON.stringify(state))
            tempState.inputValue = action.value
            return tempState
            break;
        case ADD_TOFO_ITEM:
            const tempState1 = JSON.parse(JSON.stringify(state))
            tempState1.list.push(action.value)
            tempState1.inputValue = '';
            return tempState1;
            break;
        case CHANGE_SELECT_VALUE:
            const tempState2 = JSON.parse(JSON.stringify(state))
            tempState2.selectValue = action.value
            return tempState2;
            break;
        default:
            return state; // 这里的return state是要的，因为第一次有可能 不是空值也要同步到组件的state上
    }
    
}