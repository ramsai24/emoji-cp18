// Quick Tip

//  - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

let Lst

const shuffledEmojisList = emojisList =>
  // const {emojisList} = this.props
  emojisList.sort(() => Math.random() - 0.5)

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojisLists: this.props, id: ''}

  emojiClick = ids => {
    console.log(ids)
    const {score, id, emojisLists} = this.state
    // const emojisList = {
    //   emojisList: this.shuffledEmojisList(emojisLists.emojisList),
    // }
    // console.log(emojisList)

    // emojisLists: {emojisList}this.setState({emojisLists: {emojisList}})
    this.setState({
      id: ids,
    })

    if (ids !== id) {
      // if (score < emojisList.length) {
      this.setState(prev => ({
        emojisLists: {
          emojisList: shuffledEmojisList(emojisLists.emojisList),
        },
        score: prev.score + 1,
        id: ids,
      }))
      //  }
      //   else {
      //     ;<WinOrLoseCard scoreBoard={{score, topScore, emojisList}} />
      //   }
    } else {
      console.log('game failed')
      Lst = emojisLists
    }
  }

  playAgain = (score, topScore) => {
    const {emojisLists} = this.state
    if (score === emojisLists.emojisList.length) {
      this.setState({score: 0, topScore: 0})
    } else {
      if (score > topScore) {
        this.setState({score: 0, topScore: score})
      }
      //   else if (score > topScore) {
      //     this.setState({score: 0, topScore: score})
      //   }
      this.setState(prev => ({score: 0, topScore: prev.topScore}))

      // this.setState({score: 0, topScore: score})
    }
  }

  render() {
    const {score, topScore, emojisLists} = this.state
    // const {emojisList} = this.props
    console.log(emojisLists)
    console.log(this.state)
    console.log(Lst === emojisLists)

    if (Lst === emojisLists) {
      return (
        <div className="app-container">
          <div className="bg-container">
            {/* (
            <div>
              <NavBar scoreDetails={{score, topScore}} />
              <WinOrLoseCard
                scoreBoard={{score, topScore, emojisLists}}
                playAgainBtn={this.playAgain}
              />
              )
            </div>
            ) */}
            {score !== 0 ? (
              <div>
                <NavBar scoreDetails={{score, topScore}} />
                <WinOrLoseCard
                  scoreBoard={{score, topScore, emojisLists}}
                  playAgainBtn={this.playAgain}
                />
                )
              </div>
            ) : (
              <div>
                <NavBar scoreDetails={{score, topScore}} />(
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
            )}
          </div>
        </div>
      )
    }

    return (
      <div className="app-container">
        <div className="bg-container">
          <div>
            {score === emojisLists.emojisList.length ? (
              <div>
                <NavBar scoreDetails={{score, topScore}} />
                <WinOrLoseCard
                  scoreBoard={{score, topScore, emojisLists}}
                  playAgainBtn={this.playAgain}
                />
                )
              </div>
            ) : (
              <div>
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
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
