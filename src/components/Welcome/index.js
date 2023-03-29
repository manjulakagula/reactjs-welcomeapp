import {Component} from 'react'
import './index.css'

class Subscribe extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getButtonText()
    return (
      <div className="subscribe-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.isSubscribe}
        >
          {buttonTxt}
        </button>
      </div>
    )
  }
}

export default Subscribe
