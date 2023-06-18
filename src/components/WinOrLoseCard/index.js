// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {scoreBoard, playAgainBtn} = props
  const {score, topScore, emojisLists} = scoreBoard

  const playAgainId = () => {
    playAgainBtn(score, topScore)
  }

  if (score === emojisLists.emojisList.length) {
    return (
      <div>
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={playAgainId}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>You Lose</h1>
        <p> Score</p>
        <p>{score}/12</p>
        <button type="button" onClick={playAgainId}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
