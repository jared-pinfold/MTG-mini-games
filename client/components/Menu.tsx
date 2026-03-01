import { Link } from "react-router-dom"

type Props = {
  setGame: React.Dispatch<React.SetStateAction<string>>
}

export function Menu() {
  return (
    <>
    <p>Pick a game:</p>
      {/* <button onClick={() => setGame('hangman')}>Hangman</button> */}
      <Link to="hangman">Hangman</Link>
    </>
  )
}
