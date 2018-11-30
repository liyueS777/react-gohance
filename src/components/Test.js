import React from 'react';
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { u:1 };
    }
    render() {
        console.log('TEST render')
        return (
            <div>{this.props.content}</div>
        );
    }
    // 一个组件要从父组件接收参数
    // 只要父组件的render函数执行了，子组件的这个生命周期函数就会被执行；
    // 如果组件第一次存在父组件中，不会执行
    // 如果组件已经存在父组件，才会执行
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('aA---shouldComponentUpdate',nextProps,nextState);
        console.log(nextProps.content  != this.props.centent);
        // 两个参数，一个是 
        if(nextProps.content  != this.props.centent){
            return true
        }else {
            return false
        }
    }
}

export default Test;