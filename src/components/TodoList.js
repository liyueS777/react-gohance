import React from 'react';
import TodoItem from './TodoItem'
import Test from './Test'
import Transition from "./Transition";
import { getCompany } from '../config/api' 
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            o:{
                'data-a':1,
                'data-b':2,
            },
            inputValue:"",
            html:'<h1>hello HTML</h1>',
            content:'defalur to contrnt'
         };
    }
    cc = (p) =>{
        console.log(p)
    }
    delete = (index) =>{
        //这里在修改state的时候先拷贝一份
        // immutable 
        // state不允许我们做任何的改变
        var list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    inputChange = (e) =>{
        // this.state.inputValue = e.target.value;
        var v =  e.target.value
        this.setState(()=>{
            
            return {
                inputValue:v
            }
        })
    }
    add = () =>{
        // console.log(this.state)
        // var list = [...this.state.list]
        // list.push({
        //     name:this.state.inputValue
        // });
        // setState 里面可写函数，不过要有返回值，setState是异步函数，第二个回到函数里面可以做同步看；
        this.setState((prevState)=>({
            list:[...prevState.list,{compName:prevState.inputValue}]
        }),()=>{
            //这种方式可以获取异步之后的
            console.log(2)
            console.log(this.refUl.querySelectorAll('div').length)
        });
        console.log(1)
    }
    render() {
        console.log('renderla ,开始渲染啦')
        return (
            <div className="todoList">
                <label htmlFor="insertArea">输入内容</label>
                <TodoItem deleteItem={this.delete}></TodoItem>
                <hr></hr>
                <Test content={this.state.inputValue}></Test>
                <hr></hr>
                <input id="insertArea" value={this.inputValue} onChange={this.inputChange}  /><button onClick={this.add}>add</button>
                <hr></hr>
                <div dangerouslySetInnerHTML={{__html:this.state.html}} ></div>
                <ul ref={(refUl)=>{this.refUl = refUl;}}>
                    {
                        this.state.list.map((v,key)=>{
                            return (
                                <div {...this.state.o} onClick={this.cc.bind(this,v.compName)} key={v.compId}>{v.compName+'-=-'+v.compCode}
                                
                                <button onClick={this.delete.bind(this,key)}>删除</button>
                                <br></br></div>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                <Transition></Transition>
                <hr></hr>

            </div>
        );
    }
    componentWillMount(){
        console.log('dom渲染之前')
    }
    componentDidMount(){
        console.log('dom渲染之后');
        getCompany()
        .then(res=>{
            console.log(res);
            this.setState((s)=>{
                return {
                    list:res.data
                }
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
        //如果返回true 继续走下去，更新如果返回false，不更新数据，这里就中断了后面的
    }
    componentWillUpdate(){
        console.log('要更新啦')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('更新之后')
    }
    //该组件即将从页面中移除的时候之前
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
}

export default TodoList;