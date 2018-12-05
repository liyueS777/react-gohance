import React,{Component} from 'react'

class ReactRedux extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'hellow ReactRedux'
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
export default ReactRedux