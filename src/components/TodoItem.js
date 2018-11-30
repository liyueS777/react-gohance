import React from 'react';
import PropTypes from 'prop-types';
class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = ()=>{
        this.props.deleteItem(1)
    }
    render() {
        return (
            <div className="Start">
                <span>{this.props.require}</span>
                <i>我是item子组件啦</i>
                <div onClick={this.handleClick}>{this.props.content+'获取父传递的数据和方法'}</div>
            </div>
        );
    }
}
//默认值
Start.defaultProps = {
    content: 'sam',
    require:'defaultRequire'
}

Start.propTypes = {
    // string func number  array bool object symbol
    require:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func
}
export default Start;