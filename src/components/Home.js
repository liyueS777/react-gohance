import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        console.log('home:',this.props)
    }
    goUser = () =>{
        this.props.history.push({
            pathname:'/user',
            search:"?a=2"
        })
    }
    render() {
        return (
            <div onClick={this.goUser}>这里是Home组件</div>
        );
    }
}

export default Home;