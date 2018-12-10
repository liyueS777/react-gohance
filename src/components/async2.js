import React from 'react';
import { withRouter } from 'react-router-dom'//加入这个是为了使用异步组件的时候确保所有属性方法给到异步后的组件里面去
class R2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:1233333
         };
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>{this.state.title}</div>
                <div>{this.props.match.url}</div>
            </div>
        );
    }
}

export default withRouter(R2);