
// import React from 'react';
import asyncComponent from '../components/common/AsyncComponent'


const Article = asyncComponent(() => import("../components/Article"));
const Home = asyncComponent(() => import("../components/Home"));
const News = asyncComponent(() => import("../components/News"));
const User = asyncComponent(() => import("../components/user/User"));
const UserAdd = asyncComponent(() => import("../components/user/UserAdd"));
const UserList = asyncComponent(() => import("../components/user/UserList"));
const UserDetail = asyncComponent(() => import("../components/user/UserDetail"));
const TodoList = asyncComponent(() => import("../components/TodoList"));
const TodoRedux = asyncComponent(() => import("../components/TodoListRedux"));
const Transition = asyncComponent(() => import("../components/Transition"));
const TodoRedux2 = asyncComponent(() => import("../components/TodoRedux2"));
const TodoListUI = asyncComponent(() => import("../components/TodoListUI"));
const ReactRedux = asyncComponent(() => import("../components/ReactRedux"));



// import Article from '../components/Article'
// import Home from '../components/Home'
// import News from '../components/News'

// import User from '../components/user/User'
// import UserAdd from '../components/user/UserAdd'
// import UserList from '../components/user/UserList'
// import UserDetail from '../components/user/UserDetail'


// React.lazy(() => import('./OtherComponent'));



// resolve => require(['@/pages/login'],resolve)

// const Article = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/Article').default)
//     },'Article')
// }
// const Home = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/Home').default)
//     },'Home')
// }
// const News = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/News').default)
//     },'News')
// }
// const User = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/user/User').default)
//     },'User')
// }
// const UserAdd = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/user/UserAdd').default)
//     },'UserAdd')
// }
// const UserList = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/user/UserList').default)
//     },'UserList')
// }
// const UserDetail = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/user/UserDetail').default)
//     },'UserDetail')
// }

const routes = [
    {
        path:'/',
        component:Home,
        exact:true,
        meta:{
            title:'Home'
        }
    },
    {
        path:'/home',
        component:Home,
        exact:true,
        meta:{
            title:'Home'
        }
    },
    {
        path:'/news',
        component:News,
        meta:{
            title:'New'
        }
    },
    {
        path:'/todoListUI',
        component:TodoListUI,
        meta:{
            title:'todoListUI'
        }
    },
    {
        path:'/article',
        component:Article,
        meta:{
            title:'Article'
        }
    },
    {
        path:'/todoList',
        component:TodoList,
        meta:{
            title:'TodoList'
        }
    },
    {
        path:'/todoRedux',
        component:TodoRedux,
        meta:{
            title:'todoRedux'
        }
    },    
    {
        path:'/transition',
        component:Transition,
        meta:{
            title:'transition'
        }
    },     
    {
        path:'/reactRedux',
        component:ReactRedux,
        meta:{
            title:'reactRedux'
        }
    },  
    {
        path:'/user',
        component:User,
        meta:{
            title:'User'
        },
        routes:[
            {
                path:'/user/',
                component:UserList,
                meta:{
                    title:'UserList'
                }
            },
            {
                path:'/user/userAdd',
                component:UserAdd,
                meta:{
                    title:'userAdd'
                }
            },
            {
                path:'/user/userDetail',
                component:UserDetail,
                meta:{
                    title:'userDetail'
                }
            },
            {
                path:'/user/todoRedux2',
                component:TodoRedux2,
                meta:{
                    title:'todoRedux2'
                }
            }
        ]
    }
]
 export default routes