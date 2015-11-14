import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myHeading: 'Hello React',
    toggle: false};
  }

  render() {
    return (
      <div>
      <h1>Hello World!</h1>
      <h2>{this.state.toggle ? this.state.myHeading : 'Nothing'}</h2>
      </div>
    )
  }

}

render(<App />, document.getElementById('app'))
