import React,{Fragment} from 'react';
import '../assets/css/transition.less'
import { CSSTransition , TransitionGroup } from 'react-transition-group'
class Trans extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:true,
            list:[]
         };
    }
    toggeleShow = () =>{
        var flag = this.state.show;
        this.setState({
            show:!flag
        })
    }
    add = ()=>{
        this.setState((prevState)=>{
            return {
                list:[...prevState.list,'item']
            }
        })
    }
    render() {
        return (
            <div className="trans">
                <div className="trans">
                    <p>Transiton</p>
                </div>
                <div className={`baseC ${this.state.show ? 'show':'hide'}`}>red---{this.state.show ? 'show':'hide'}</div>
                <div><button onClick={this.toggeleShow}>Toggle</button></div>
                <hr></hr>
                <Fragment>
                    <button onClick={this.add}>add</button>
                    <TransitionGroup>
                        
                        {
                            this.state.list.map((v,index)=>{
                                return (
                                    <CSSTransition
                                        timeout={800}
                                        classNames="fade"
                                        unmountOnExit
                                        onEntered={el=>{el.style.color='blue'}}
                                        appear={true}
                                        key={index}
                                    >
                                        <div >{v}</div>
                                    </CSSTransition>
                                )
                            })
                        }
                        
                    </TransitionGroup>
                </Fragment>
            </div>
            
        );
    }
}

export default Trans;