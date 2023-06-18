// Quick Tip

//  - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojisLists: this.props, id: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClick = ids => {
    console.log(id)
    const {score, id, topScore} = this.state
    const emojisList = this.shuffledEmojisList()
    console.log(emojisList)

    this.setState({emojisLists: {emojisList}, id: ids})

    // if (ids !== id) {
    //   this.setState(prev => ({
    //     emojisLists: {emojisList},
    //     id: ids,
    //     score: prev.score + 1,
    //   }))
    // }
  }

  render() {
    const {score, topScore, emojisLists} = this.state
    // const {emojisList} = this.props
    console.log(emojisLists)

    return (
      <div className="app-container">
        <div className="bg-container">
          <NavBar scoreDetails={{score, topScore}} />
          <ul className="emoji-List-Items">
            {emojisLists.emojisList.map(each => (
              <EmojiCard
                emojiListItem={each}
                key={each.id}
                emojiClick={this.emojiClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
