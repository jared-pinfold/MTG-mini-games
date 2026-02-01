import { useEffect, useState } from 'react'
import { useCard } from '../../hooks/useCard'
import { Error } from '../Error'
import { Loading } from '../Loading'

export function Hangman() {
  // Fetch data for a random MTG card
  const { data: card, isError, isLoading } = useCard()
  
  // State
  const [guessed, setGuessed] = useState([] as string[])   // Used to determine if a letter on the keyboard is greyed out
  const [remainingGuesses, setRemainingGuesses] = useState(5)
  const [correctlyGuessed, setCorrectlyGuessed ] = useState([] as string[]) // Used to determine if a letter should appear on the answer gameboard

  // Ensure punctuation and spaces are displayed in the answer gameboard
  useEffect(()=> {
    if (card) {
      setCorrectlyGuessed(card.punctuation)
    }
  }, [card])

console.log('corrGuess', correctlyGuessed)
  // Determine which letters are correct
  const correctLetters = new Array(...new Set(card?.name.toLowerCase().split('')))
console.log("corr", correctLetters)
  // Which characters to display in the answer gameboard
  const charactersOrUnderscores = card?.name
    .split('')
    .map((c) => {
      if (correctlyGuessed.includes(c.toLowerCase())) return c
      else return "_"
    })
    .join('')

  if (isError) return <Error />
  if (isLoading) return <Loading />

  if (card)
    return (
      <>
        <h2>Hangman</h2>
        <p>{card.name}</p>
        <p>{charactersOrUnderscores}</p>
        <img src={card.image} alt={''} />
      </>
    )
}
