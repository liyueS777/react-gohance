
import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import NotFind from '../components/NotFind'

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
    {
        path:'/404',
        component:NotFind,
        meta:{
            title:'404'
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