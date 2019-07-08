import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import loadable from '@loadable/component'

class routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={loadable(() => import('../pages/Index/Index.js'))}/>
          <Route path='/home' component={loadable(() => import('../pages/Home/Index.js'))}/>
          <Route path='/parent' component={loadable(() => import('../pages/Parent/Index.js'))}/>
          <Route component={loadable(() => import('../pages/404/Index.js'))}/>
        </Switch>
      </Router>
    )
  }
}

export default routes
