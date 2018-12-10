import React, { Component } from 'react';
import { HashRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom'
// import routes from './routes/router'
import routes from './routes/routerReactLodable'
//BrowserRouter  HashRouter
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"我是app的title"
    }
  }
  componentDidMount(){
    console.log('我是app的Mount')
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="app">
              {/* <div className="App">
                <h1>{this.state.title}</h1>
                <hr/>
                <Link to="/">首页</Link>&nbsp;&nbsp;
                <Link to="/news">新闻</Link>&nbsp;&nbsp;
                <Link to="/article">文章</Link>&nbsp;&nbsp;
              </div> */}
              {
                routes.map((route,key)=>{
                  if(route.exact){
                    return <Route key={key} path={route.path} exact render={
                      props =>
                      (<route.component {...props} routes={route.routes} />)
                    }
                    />
                  }else {
                    return <Route key={key} path={route.path} render={
                      props =>
                      (<route.component {...props} routes={route.routes} />)
                    }
                    />
                  }
                })
              }
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;


