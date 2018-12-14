import React,{Component} from 'react';
export default (BaseC) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }
        render() {
            return (
                <BaseC {...this.props} />
            );
        }
    }
}