import React,{Component} from 'react'
// import store from '../store'
import { connect } from 'react-redux'
// import { CHANGE_INPUT_VALUE,INPUT_BLUR,INPUT_FOCUS } from '../store/actionTypes'
import {change_input_value,input_blur,input_focus,getList} from '../store/actionCreators'
import { Link } from 'react-router-dom'
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
    // toggle = (p) =>{
    //     this.setState((prevS)=>{
    //         return {
    //             toggle:p
    //         }
    //     },()=>{
    //         console.log(this.state.toggle)
    //     })
    // }
    goR = () => {
        this.props.history.push({
            pathname:'/r2',
            search:'?a=2&c=3'
        })
    }
    render(){
        console.log(111,this.props.input_status)
        return (
            <div>
                {/* {this.state.title}====={this.state.getDefault} */}
                <input value={this.props.inputValue} onChange={this.props.inputChange} />
                {/* <Button onClick={this.toggle.bind(this,true)}>开启</Button> */}
                {/* <Button onClick={this.toggle.bind(this,false)}>关闭</Button> */}
                <CSSTransition
                in={this.props.input_status}
                classNames="test"
                // onEntered={el => {
                //     //这个属性可以给动画播放完毕后的组件执行一次js函数
                //     // el.style.width = "120px";
                //     this.setState({toggle:false})
                //   }}
                // test-enter test-enter-active test-exit test-exit-active
                timeout={1000}
                >
                    <input className="u"  onFocus={this.props.handleFoucus} onBlur={this.props.handleBlur} />
                </CSSTransition>
                <hr></hr>
                <button onClick={this.goR}>go R2</button>
                <Link to="/r2?a=5">go RRR</Link>
                <Button onClick={this.props.handleAddList}>dispatch add List</Button>
                <hr></hr>
                {
                    this.props.list.map((v,k)=>{
                        return (
                            <h2 key={k}>{v.name}</h2>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        // // inputValue:state.inputValue,
        // input_status:state.getIn(['input','input_status']),
        // // input_status:state.get("input").get('input_status'),//使用immutable后要用set get方法
        // list:state.get('input').get('iList'),//这里返回的是immutable  的数组或者对象


        //不使用immutable
        input_status:state.input.input_status,
        list:state.input.iList,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            const action = change_input_value(e.target.value)
            dispatch(action);
        },
        handleFoucus(){
            const action = input_focus(true);
            dispatch(action);
        },
        handleBlur(){
            const action = input_blur(false);
            dispatch(action);
        },
        handleAddList(){
            dispatch(getList({name:'cc',id:5}))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReactRedux)