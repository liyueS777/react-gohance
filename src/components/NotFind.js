import React from 'react';
// import ReactMixin from 'react-mixin'
// import minx from './a_mixins'

class NotFind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        console.log('notfinfd');
        this.props.onEnter()()
        // document.title = this.props.meta.title
    
    }
    render() {
        console.log(this.props)
        return (
            <div>404-------</div>
        );
    }
}

export default NotFind;
// export default ReactMixin(NotFind.prototype,minx);