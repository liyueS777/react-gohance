const defaultStore = {
    inputValue:'123',
    list:[1,2,3]
}

export default (state=defaultStore,action) => {
    console.log('reducer:',state,action);
    switch (action.type) {
        case "change_input_value":
            const tempState = JSON.parse(JSON.stringify(state))
            tempState.inputValue = action.value
            return tempState
            break;
        case "add_todo_item":
            const tempState1 = JSON.parse(JSON.stringify(state))
            tempState1.list.push(action.value)  
            tempState1.inputValue = '';
            return tempState1;  
    }
    return state;
}