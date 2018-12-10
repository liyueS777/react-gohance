import { CHANGE_INPUT_VALUE,INPUT_BLUR,INPUT_FOCUS,LIST } from '../actionTypes'
// import { fromJS } from 'immutable'
// fromJS 是转化为immutable对象，toJs 是转化为JS 对象
//使用immutable 对象
// const defaultState = fromJS({
//     default:'001',
//     inputValue:'hellow world',
//     input_status:false,
//     iList:[
//         {
//             name:'aa',
//             id:1
//         },
//         {
//             name:'bb',
//             id:2
//         },
//     ]
// })
//不使用，不过这个看抉择
const defaultState = {
    default:'001',
    inputValue:'hellow world',
    input_status:false,
    iList:[
        {
            name:'aa',
            id:1
        },
        {
            name:'bb',
            id:2
        },
    ]
}
export default (state = defaultState,action) =>{
    
    if(action.type === CHANGE_INPUT_VALUE){
        const s = JSON.parse(JSON.stringify(state))
        s.inputValue = action.value;
        return s;
        // return state.set('inputValue',action.value)//使用immutable后要用set get方法
        // return {
        //     inputValue:action.value
        // }
    }
    else if(action.type === INPUT_BLUR){
        const s = JSON.parse(JSON.stringify(state))
        s.input_status = action.value;
        return s;
        // return state.set('input_status',action.value)

        // return {
        //     input_status:action.value
        // }
    }
    else if(action.type === INPUT_FOCUS){
        const s = JSON.parse(JSON.stringify(state))
        s.input_status = action.value;
        return s;
        // return state.set('input_status',action.value)
        
        // return {
        //     input_status:action.value
        // }
    }
    else if(action.type === LIST){
        const s = JSON.parse(JSON.stringify(state))
        s.iList.push(action.value);
        return s;
        // return state.set('input_status',action.value)
        
        // return {
        //     input_status:action.value
        // }
    }
    else {
        return state
    }
    // switch(action.type){
    //     case CHANGE_INPUT_VALUE :
    //         return state.set('inputValue',action.value)
    //         break;
    //     case INPUT_BLUR :
    //         return state.set('input_status',action.value)
    //         break;
    //     case INPUT_FOCUS :
    //         return state.set('input_status',action.value)
    //         break;
    //     case LIST :
    //         var arr = state.get('iList');
    //         arr.push(action.value);
    //         console.log(arr)
    //         return state.set('iList',arr)
    //         break;
    //     default:
    //         return state;
    // }
}