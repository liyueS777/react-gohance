import React from 'react';
class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    goIndex = () =>{
        this.props.history.push({
            pathname:'/',
            search:'?a=1'//如果要携带参数采用search，而不是query，因为路由版本不一样
        })
    }
    render() {
        return (
            <div onClick={this.goIndex}>我是UserDetail</div>
        );
    }
}

export default UserDetail;