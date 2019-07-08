import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import loadable from '@loadable/component'
import {observer, inject} from "mobx-react";


import '../../App.css';

@inject('userStore')
@observer
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  authRequired(nextState, replace) {
    const {firtName} = this.props.userStore.firstName
    console.log(this.props)
    console.log(firtName)
  }

  // window 变量使用方式
  //   window.location.href = 'http://www.baidu.com'
  render() {

    return (<div className="App">
        <header className="App-header">
          Parent
          <button onClick={() => {
          }}>ChangeName</button>
          <Router>
            <Link to="/parent">go Parent</Link><br/>
            <Link to={`/parent/child`}>go Child</Link>
          </Router>
        </header>
        <Route path={`/parent/child`} component={loadable(() => import('../Child/Index.js'))}
               onEnter={() => this.authRequired}/>
      </div>
    )
  }

}

export default Index;
