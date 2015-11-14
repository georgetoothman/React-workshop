import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myHeading: 'Hello React',
    toggle: false};
  }

  toggle = () => {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    const obj = { react: 'fun', angular: 'ok', jquery: 'soso'}
    let {react, angular, jquery} = obj;

    return (
      <div>
        <h1>Hello World!</h1>
        <h2 onClick={this.toggle}> {this.state.toggle ? this.state.myHeading : 'Nothing'}</h2>
        <h2> ES6 Fun {jquery}</h2>
      </div>
    )
  }

}

render(<App />, document.getElementById('app'))
