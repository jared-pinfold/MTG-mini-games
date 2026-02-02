import { useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { useCard } from '../../../hooks/useCard'
import { Error } from '../../Error'
import { Loading } from '../../Loading'
import { GameBoard } from './GameBoard'

export function Hangman() {
  // Fetch data for a random MTG card
  const { data, isError, isLoading } = useCard()
  const queryClient = useQueryClient()

  // const [guessed, setGuessed] = useState([] as string[]) // Used to determine if a letter on the keyboard is greyed out
  const [remainingGuesses, setRemainingGuesses] = useState(5)
  const gameState = useRef('play')
  // const [correctlyGuessed, setCorrectlyGuessed] = useState([] as string[]) // Used to determine if a letter should appear on the answer gameboard
  // const correctLetters = useRef([] as string[])

  // Ensure punctuation and spaces are displayed in the answer gameboard
  // useEffect(() => {
  //   if (card) {
  //     setCorrectlyGuessed(card.punctuation)
  //     if (correctLetters.current.length === 0) {correctLetters.current = card.correctLetters}
  //   }
  // }, [card])

  // Which characters to display in the answer gameboard
  const charactersOrUnderscores = data?.name
    .split('')
    .map((c) => {
      if (data.displayCharacters.includes(c.toLowerCase())) return c
      else return '_'
    })
    .join('')

  // console.log('corrGuess', correctlyGuessed)
  function checkGameState() {
    if (remainingGuesses === 0) gameState.current = 'loss'
    if (!charactersOrUnderscores?.match('_')) gameState.current = 'win'
  }

  if (isError) return <Error />
  if (isLoading) return <Loading />

  if (data)
    return (
      <>
        <h2>Hangman</h2>
        <p>{data.name}</p> {/* temp */}
        {gameState.current === 'play' && (
          <GameBoard
            {...{
              gameState,
              remainingGuesses,
              setRemainingGuesses,
              charactersOrUnderscores,
            }}
          />
        )}
        <img src={data.image} alt={''} /> {/* temp */}
      </>
    )
}
