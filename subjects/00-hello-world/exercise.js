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
    let string = `I am ${react} ${angular}`;
    let array = [1,2,3];
    let arrayTwo = [...array, 4]
    let arrayStuff = ['a', 'b', 'c', 'd'];
    let jsx = arrayStuff.map(ele => (<span> {ele} </span>));

    return (
      <div>
        <h1>Hello World!</h1>
        <h1 style={this.state.toggle ? {backgroundColor: 'red'} : {backgroundColor: 'blue'}}>Hello</h1>
        <h2 onClick={this.toggle}> {this.state.toggle ? this.state.myHeading : 'Nothing'}</h2>
        <h2> ES6 Fun {arrayTwo}</h2>
        {jsx}
      </div>
    )
  }

}

render(<App />, document.getElementById('app'))
