import React from 'react';
import { Route,Link} from 'react-router-dom'

import { Layout, Menu, Icon,Switch } from 'antd';
import '../../assets/css/user.less'
import '../../assets/css/layout/index.css'

import store from '../../store/index'
// import { getTodoData } from '../../store/actionsCreators'
const { Header, Sider, Content } = Layout;

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            checked:false
        };
    }
    componentWillMount(){
        store.subscribe(()=>{
            console.log('sdd',store.getState())
            this.setState(()=>({
                checked:store.getState().buttonStatus
            }))
        })
    }
    componentDidMount() {
        // const action = getTodoData();
        console.log('User11111111',this.props)
        //这里为什么可以是函数了
        //因为redux-thunk 的作用即是将 action 从一个对象变成一个函数
        // store.dispatch(action)
        
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    onChange =(s)=>{
        console.log('switch CCC',s)
        this.setState((()=>({
            checked:s
        })))
    }
    render() {
        return (
            <div className="user">
                <Layout>
                    <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/user">
                                <Icon type="user" className="floder" />
                                    <span>user
                                        <Switch checked={this.state.checked} onChange={this.onChange} />
                                    </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/user/userAdd'>
                                <Icon type="video-camera" />
                                <span>userAdd</span>
                            </Link>
                        </Menu.Item>
                            
                            <Menu.Item key="3">
                                <Link to='/user/userDetail'>
                                    <Icon type="upload" />
                                    <span>userDetail</span>
                                </Link>
                            </Menu.Item>
                            
                            <Menu.Item key="4">
                                <Link to='/user/todoRedux2'>
                                    <Icon type="upload" />
                                    <span>todoRedux2</span>
                                </Link>
                            </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <div className="right">
                                {
                                    this.props.routes.map((route,key)=>{
                                        return (
                                            <Route exact key={key} path={route.path} component={route.component} />
                                        )
                                    })
                                }
                            </div>
                        </Content>
                    </Layout>
                </Layout>

                
            </div>
        );
    }
}

export default User;