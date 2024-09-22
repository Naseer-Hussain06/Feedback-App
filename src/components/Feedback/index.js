import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackRecivied: false,
  }

  onClickButton = () => {
    this.setState({isFeedbackRecivied: true})
  }

  renderFeedbackEmoji() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="main-container">
        <div className="white-card">
          <h1 className="heading">
            How satisfied are you with our customer support performance ?
          </h1>

          <ul className="un-orderedlist">
            {emojis.map(item => (
              <li key={item.id}>
                <div className="emoji-container">
                  <button
                    type="button"
                    className="emoji-button"
                    onClick={this.onClickButton}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="emoji"
                    />
                  </button>
                  <p className="para">{item.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderFeedbackRecivied() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="main-container">
        <div className="white-card2">
          <img src={loveEmojiUrl} alt="love Emoji" className="love-image" />
          <h1 className="thankyoutext">Thank you!</h1>
          <p className="thankyoupara">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackRecivied} = this.state
    return (
      <div className="main-container">
        {isFeedbackRecivied
          ? this.renderFeedbackRecivied()
          : this.renderFeedbackEmoji()}
      </div>
    )
  }
}

export default Feedback
