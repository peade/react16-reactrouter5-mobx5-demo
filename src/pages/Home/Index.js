import React from 'react';
import './Index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log('index', this.props)
    console.log(this.props.location.search)
    let param = new URLSearchParams(this.props.location.search)
    console.log(param, param.toString(), param.get('name'))
  }

  // window 变量使用方式
  //   window.location.href = 'http://www.baidu.com'
  render() {
    return (<div className="App">
        <header className="App-header">
          Learn React Home
        </header>
      </div>
    )
  }

}

export default Index
