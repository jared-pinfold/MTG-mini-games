import { useState } from 'react'

import { useCard } from '../../../hooks/useCard'
import { Error } from '../../Error'
import { Loading } from '../../Loading'
import { GameBoard } from './GameBoard'

export function Hangman() {
  // Fetch data for a random MTG card
  const { data, isError, isLoading } = useCard()

  const [remainingGuesses, setRemainingGuesses] = useState(5)
  const [gameState, setGameState] = useState('play')

  // Which characters to display in the answer gameboard
  const charactersOrUnderscores = data?.name
    .split('')
    .map((c) => {
      if (data.displayCharacters.includes(c.toLowerCase())) return c
      else return '_'
    })
    .join('')

  function checkGameState() {
    if (remainingGuesses === 0) setGameState('loss')
    if (!charactersOrUnderscores?.match('_')) setGameState('win')
  }

  if (isError) return <Error />
  if (isLoading) return <Loading />

  if (data)
    return (
      <>
        <h2>Hangman</h2>
        <p>Guess the name of this random Magic: The Gathering card!</p>
        {gameState === 'play' && (
          <GameBoard
            {...{
              gameState,
              remainingGuesses,
              setRemainingGuesses,
              charactersOrUnderscores,
              checkGameState,
            }}
          />
        )}
        {gameState === 'win' && <p>You win!</p>}
        {gameState === 'loss' && <p>You lose!</p>}
        <img className="hangman-image" src={gameState === 'play' ? data.artOnly : data.image} alt={''} /> {/* temp */}
      </>
    )
}
