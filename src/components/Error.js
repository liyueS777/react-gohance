import React from 'react';
class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    err = () =>{
        this.props.history.push('/home')
    }
    render() {
        return (
            <div onClick={this.err}>error</div>
        );
    }
}

export default Error;