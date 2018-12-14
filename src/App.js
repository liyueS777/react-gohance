import React, { Component } from 'react';
import { HashRouter as Router,Route,Link,Switch,Redirect,withRouter } from 'react-router-dom'
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
    window.addEventListener('hashchange', (r) => {
      console.log(1,window.navigator)
    })

  }
  setTitle = (t) =>{
    console.log(678,t)
    document.title = t
  }
  componentWillMount(){
    console.log('我是app的Mount',this.props)
  }
  render() {
    return (
      <Provider store={store}>
        
          <Router>
            <div id="app">
                <Switch>
                  {
                    routes.map((route,key)=>{
                      if(route.exact){
                        return <Route key={key}  path={route.path} exact render={
                          props =>
                          (<route.component {...props} meta={route.meta} onEnter={()=> this.setTitle.bind(this,route.meta.title)} routes={route.routes}  />)
                        }
                        />
                      }else {
                        return <Route key={key} path={route.path}  render={
                          props =>
                          (<route.component {...props} meta={route.meta} onEnter={() => this.setTitle.bind(this,route.meta.title)}  routes={route.routes} />)
                        }
                        />
                      }
                    })
                  }
                  <Route render={() => <Redirect to="/404" />} />
                </Switch>
                
            </div>

          </Router>
      </Provider>
    );
  }
}

export default App;


