import React from 'react';
import { Input,Button,List  } from 'antd';
import store from '../store/index'

class TodoRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            r:{}
         };
    }
    componentWillMount(){
        console.log(store);
        store.subscribe(this.handleStoreChange)
        this.state.r = store.getState()
    }
    changeInputValue = (e) => {
        const action = {
            type:"change_input_value",
            value:e.target.value
        }
        store.dispatch(action)
    }
    handleStoreChange = () => {
        console.log('store change');
        this.setState({
            r:store.getState()
        })
    }
    search = ()=>{
        const action = {
            type:"add_todo_item",
            value:this.state.r.inputValue
        };
        store.dispatch(action)
    }
    render() {
        console.log(this.state.r)
        return (
            <div>
                <Input onChange={this.changeInputValue} value={this.state.r.inputValue} style={{width:'300px','marginRight':'20px'}} placeholder="请输入" />
                <Button onClick={this.search}>搜素</Button>
                <List
                style={{width:'300px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.r.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoRedux