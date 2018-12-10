
import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const loading = function(){
    return (<div>正在加载中...</div>)
}
const LoadableComponent = Loadable({
  loader: () => import('../components/ReactRedux'),
  loading//这里的loading是一个函数返回一个jsx语法的前提是引入react，也可以使用一个loading 的component组件
});
const LoadableComponent2 = Loadable({
  loader: () => import('../components/async2'),
  loading
});
 
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }

// export default () => (<LoadableComponent />)

// const Article = asyncComponent(() => import("../components/Article"));
// const Home = asyncComponent(() => import("../components/Home"));
// const News = asyncComponent(() => import("../components/News"));
// const User = asyncComponent(() => import("../components/user/User"));
// const UserAdd = asyncComponent(() => import("../components/user/UserAdd"));
// const UserList = asyncComponent(() => import("../components/user/UserList"));
// const UserDetail = asyncComponent(() => import("../components/user/UserDetail"));
// const TodoList = asyncComponent(() => import("../components/TodoList"));
// const TodoRedux = asyncComponent(() => import("../components/TodoListRedux"));
// const Transition = asyncComponent(() => import("../components/Transition"));
// const TodoRedux2 = asyncComponent(() => import("../components/TodoRedux2"));
// const TodoListUI = asyncComponent(() => import("../components/TodoListUI"));
// const ReactRedux = asyncComponent(() => import("../components/ReactRedux"));

const routes = [
    {
        path:'/',
        component:LoadableComponent,
        exact:true,
        meta:{
            title:'reactRedux'
        }
    },   
    {
        path:'/reactRedux',
        component:LoadableComponent,
        meta:{
            title:'reactRedux'
        }
    },   
    {
        path:'/r2',
        component:LoadableComponent2,
        meta:{
            title:'r2'
        }
    },  
    // {
    //     path:'/user',
    //     component:User,
    //     meta:{
    //         title:'User'
    //     },
    //     routes:[
    //         {
    //             path:'/user/',
    //             component:UserList,
    //             meta:{
    //                 title:'UserList'
    //             }
    //         },
    //         {
    //             path:'/user/userAdd',
    //             component:UserAdd,
    //             meta:{
    //                 title:'userAdd'
    //             }
    //         },
    //         {
    //             path:'/user/userDetail',
    //             component:UserDetail,
    //             meta:{
    //                 title:'userDetail'
    //             }
    //         },
    //         {
    //             path:'/user/todoRedux2',
    //             component:TodoRedux2,
    //             meta:{
    //                 title:'todoRedux2'
    //             }
    //         }
    //     ]
    // }
]
 export default routes