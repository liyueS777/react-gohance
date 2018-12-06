import React,{Component} from 'react'
// import store from '../store'
import { connect } from 'react-redux'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
class ReactRedux extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'hellow ReactRedux1',
            // getDefault:store.getState().default
        }
        
    }
    submit = () =>{

    }
    inputChange = (e) =>{
        console.log(e.target.value)
    }
    render(){
        return (
            <div>
                {/* {this.state.title}====={this.state.getDefault} */}
                <input value={this.props.inputValue} onChange={this.props.inputChange} />
                <button onClick={this.submit}>提交</button>
                <CSSTransition
                timeout={500}
                classNames="fade"
                >
                    <div>AAA</div>
                </CSSTransition>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        inputValue:state.inputValue
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            console.log(action)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReactRedux)