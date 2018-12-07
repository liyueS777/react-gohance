import React,{Component} from 'react'
// import store from '../store'
import { connect } from 'react-redux'
import '../assets/css/reactRedux.less'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import { Button } from 'antd/lib/radio';
class ReactRedux extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'hellow ReactRedux1',
            // getDefault:store.getState().default
            toggle:false
        }
        
    }
    toggle = (p) =>{
        this.setState((prevS)=>{
            return {
                toggle:p
            }
        },()=>{
            console.log(this.state.toggle)
        })
    }
    inputChange = (e) =>{
        console.log(e.target.value)
    }
    render(){
        return (
            <div>
                {/* {this.state.title}====={this.state.getDefault} */}
                <input value={this.props.inputValue} onChange={this.props.inputChange} />
                <Button onClick={this.toggle.bind(this,true)}>开启</Button>
                <Button onClick={this.toggle.bind(this,false)}>关闭</Button>
                <CSSTransition
                in={this.state.toggle}
                classNames="test"
                onEntered={el => {
                    //这个属性可以给动画播放完毕后的组件执行一次js函数
                    // el.style.width = "120px";
                    this.setState({toggle:false})
                  }}
                // test-enter test-enter-active test-exit test-exit-active
                timeout={1000}
                >
                    <input className="u"  />
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