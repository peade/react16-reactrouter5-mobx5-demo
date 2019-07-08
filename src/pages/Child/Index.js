import React from 'react';
import '../../App.css';

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.location.search)
    let param = new URLSearchParams(this.props.location.search)
    console.log(param, param.toString(), param.get('name'))
  }

  // window 变量使用方式
  //   window.location.href = 'http://www.baidu.com'
  render() {
    return (<div className="App">
        <div>Child</div>
      </div>
    )
  }

}

export default Index;
