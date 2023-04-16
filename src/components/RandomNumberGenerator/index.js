import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => this.setState({count: Math.floor(Math.random() * 101)})

  render() {
    const {count} = this.state
    return (
      <div className="page">
        <div className="bg">
          <h1 className="mainHead">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
