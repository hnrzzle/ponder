import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cardData from '../api'
import Card from './Card'

const blackLotus = await cardData('Explore');
// console.log(blackLotus);

function App() {
  const [guessCount, setGuessCount] = useState(0)
  const [theCard, setTheCard] = useState(blackLotus);

  return (
    <>
      <h1>Ponder</h1>
      <Card theCard={theCard} />
      <div className="card">
        <button onClick={() => setGuessCount((guessCount) => guessCount + 1)}>
          guessCount is {guessCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
