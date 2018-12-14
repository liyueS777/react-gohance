import React from 'react';
import { withRouter } from 'react-router-dom'//加入这个是为了使用异步组件的时候确保所有属性方法给到异步后的组件里面去

class R2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:1233333
         };
    }
    componentWillMount(){
        console.log('async',this.props)
        this.props.onEnter()()
        return
        document.title = this.props.meta.title
    
    }
    render() {
        // document.title = this.props.meta.title
        console.log(1115)
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.props.match.url}</div>
            </div>
        );
    }
}

export default withRouter(R2);