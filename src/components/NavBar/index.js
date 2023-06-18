// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreDetails} = props
  console.log(props)
  const {score, topScore} = scoreDetails

  if (score === 12) {
    return (
      <nav className="nav-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
      </nav>
    )
  }

  return (
    <nav className="nav-container">
      <div className="inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      <ul className="score-items inner-container">
        <li>Score :{score}</li>
        <li>Top Score: {topScore}</li>
      </ul>
    </nav>
  )
}

export default NavBar
