const defaultState = {
    default:'001',
    inputValue:'hellow world'
}
export default (state = defaultState,action) =>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }else {
        return state
    }
    
}