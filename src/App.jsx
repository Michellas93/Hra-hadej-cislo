import { useState } from 'react'

const generateSecret = () => Math.trunc(Math.random() * 20) + 1

export default function App() {
  const [secret, setSecret] = useState(generateSecret)
  const [score, setScore] = useState(20)
  const [highscore, setHighscore] = useState(0)
  const [message, setMessage] = useState('Jak si vedeš')
  const [guess, setGuess] = useState('')
  const [won, setWon] = useState(false)

  function handleCheck() {
    const guessNum = Number(guess)
    if (!guessNum) {
      setMessage('🛑 Žádné číslo!')
    } else if (guessNum === secret) {
      setMessage('Číslo je správně 🥳')
      setWon(true)
      if (score > highscore) setHighscore(score)
    } else if (score > 1) {
      setMessage(guessNum > secret ? 'Příliš velké číslo' : 'Příliš nízké číslo')
      setScore(s => s - 1)
    } else {
      setMessage('Prohráváš')
      setScore(0)
    }
  }

  function handleReset() {
    setSecret(generateSecret())
    setScore(20)
    setMessage('Začni hádat')
    setGuess('')
    setWon(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className={`app${won ? ' app--won' : ''}`}>
      <div className="container__number--left">
        <p className="number--two">2</p>
        <p className="position__number number--seventeen">17</p>
        <p className="position__number number--twelve">12</p>
        <p className="number--nineteen">19</p>
        <p className="number--ten">10</p>
        <p className="position__number number--four">4</p>
        <p className="number--threeteen">13</p>
        <p className="number--fiveteen">15</p>
        <p className="position__number number--eighteen">18</p>
        <p className="position__number number--six">6</p>
      </div>

      <div className="container">
        <header>
          <h1 className="title">Guess my number</h1>
        </header>
        <main>
          <div className="box__main">
            <button className="btn" onClick={handleReset}>Zkus to znovu!</button>
            <p className="between">(od 1 do 20)</p>
            <div className={`number${won ? ' number--big' : ''}`}>
              {won ? secret : '?'}
            </div>
            <input
              type="number"
              min="0"
              max="20"
              className="guess"
              placeholder="enter number"
              value={guess}
              onChange={e => setGuess(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="check" onClick={handleCheck}>klik!</button>
            <section className="right">
              <p className="message">{message}</p>
              <p className="label-score">💯 Score: <span className="score">{score}</span></p>
              <p className="label-highscore">🥇 Highscore: <span className="highscore">{highscore}</span></p>
            </section>
          </div>
          <div className="container__number--right">
            <p className="number--eight">8</p>
            <p className="position__number number--fourteen">14</p>
            <p className="position__number number--three">3</p>
            <p className="number--seven">7</p>
            <p className="number--one">1</p>
            <p className="position__number number--eleven">11</p>
            <p className="number--sixteen">16</p>
            <p className="number--five">5</p>
            <p className="number--nine">9</p>
            <p className="position__number number--twenty">20</p>
          </div>
        </main>
      </div>
    </div>
  )
}
