import React from 'react';
class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount() {
        console.log('base组件即将被更新')
    }
    render() {
        return (
            <div className="base">base-Component</div>
        );
    }
}

export default Base;