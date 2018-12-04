import React from 'react';
import { Radio,Select,Button } from 'antd';
import store2 from '../store/index'
// import { CHANGE_SELECT_VALUE } from '../store/actionsType'
import { changeSelectItem } from '../store/actionsCreators'
const RadioGroup = Radio.Group;
const Option = Select.Option;
class TodoRedux2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            radioSelectType:'',
            initTypeList:[
                {
                    value:'1',
                    label:'UU'
                },
                {
                    value:'2',
                    label:'CC'
                },
                {
                    value:'3',
                    label:'PP'
                }
            ],
            initSelect:[
                {
                    value:'1',
                    label:'u-'
                },
                {
                    value:'2',
                    label:'c-'
                },
                {
                    value:'3',
                    label:'p-'
                },
            ],
            selectValue:"2"
         };
    }
    radioChange = (e) =>{
        console.log(e.target.value)
        this.setState(()=>{
            return {
                radioSelectType:e.target.value
            }
        })
    }
    radioList = (list) =>{
        return list.map((v) =>{
            return (
                <Radio key={v.value} value={v.value}>{v.label}</Radio>
            )
        })
    }

    handleProvinceChange = (p) =>{
        this.setState(()=>{
            return {
                selectValue:p
            }
        },()=>{
            console.log(this.state.selectValue);
            // var action = {
            //     type:CHANGE_SELECT_VALUE,
            //     value:p
            // }
            store2.dispatch(changeSelectItem(p))
        });

    }
    componentWillMount(){
        store2.subscribe(this.handleReduxSelect)
    }
    handleReduxSelect = () => {
        var s = store2.getState();
        console.log(555,s)
        this.setState(()=>({radioSelectType:s.selectValue}))
    }
    goRedux = () => {
        this.props.history.push({
            pathname:"todoRedux",
            search:'?a=2'
        })
    }
    render() {
        return (
            <div>
                <h1>hellow redux</h1>
                <Button type="primary" onClick={this.goRedux}>跳转redux</Button>
                <Select
                defaultValue={this.state.selectValue}
                value={this.state.selectValue}
                style={{ width: 120 }}
                onChange={this.handleProvinceChange}
                >
                {this.state.initSelect.map(params => <Option key={params.value}>{params.label}</Option>)}
                </Select>
                <hr></hr>
                <RadioGroup onChange={this.radioChange} value={this.state.radioSelectType}>
                    {this.radioList(this.state.initTypeList)}
                </RadioGroup>
            </div>
        );
    }
}

export default TodoRedux2;