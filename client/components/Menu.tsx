import { Link } from "react-router-dom"

export function Menu() {
  return (
    <>
    <p>Pick a game:</p>
      <Link to="hangman">Hangman</Link>
    </>
  )
}
