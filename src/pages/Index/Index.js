import React from 'react';

// import PropTypes from 'prop-types'
// import {Redirect} from 'react-router-dom'
import '../../App.css';
import logo from '../../logo.svg'
import {HashRouter as Router, Link} from 'react-router-dom'
import {observer, inject} from "mobx-react";

@inject('userStore')
@observer
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 111
    }
  }

  componentWillMount() {
    console.log('will Mount')
    console.log(this.props.userStore)
  }

  componentDidMount() {
    // console.log(this.props)
  }

  goTo() {
    this.props.history.push('/home?name=aaa')
  }

  changeAsync(text) {
    console.log(text)
    console.log(this)
    const user = this.props.userStore
    user.asyncSetFirstName(text)
      .then(function () {
        console.log(111111)
      })
  }

  evTwo(pa, event) {
    // event 在往里传参数时不需要显性传入
    // event 事件，react有自己的事件对象，不是直接绑定到元素上的。
    // 要获取原始的event，需要执行event.persit()
    event.persist()
    console.log(pa)
    console.log(event)
  }

  render() {
    const user = this.props.userStore
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          {user.fullName}
          <Router>
            <Link to="/">Index</Link><br/>
            <Link to="/home">Home</Link><br/>
            <Link to="/parent">Parent</Link><br/>
          </Router>
        </header>
        <button onClick={() => user.setFirstName('newFirst')}> 修改firsName</button>
        <button onClick={() => this.changeAsync('async')}>异步修改firstName
        </button>
        <button onClick={this.goTo.bind(this)}>go Home</button>
        <button onTouchStart={this.evTwo.bind(this, '11111')}>事件2</button>
      </div>
    );
  }
}

// Index.propTypes = {
//   add: PropTypes.func.isRequired
// }
export default Index

// export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default connect(mapStateToProps, {add: ADD, addCounter})(Index)
