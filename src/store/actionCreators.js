import { CHANGE_INPUT_VALUE,INPUT_FOCUS,INPUT_BLUR,LIST } from './actionTypes'
export const change_input_value = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})
export const input_blur = (value) => ({
    type:INPUT_BLUR,
    value
})
export const input_focus = (value) => ({
    type:INPUT_FOCUS,
    value
})
export const getList = (value) => ({
    type:LIST,
    value
})