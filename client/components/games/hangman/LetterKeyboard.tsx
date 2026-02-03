import { useQueryClient } from '@tanstack/react-query'
import { alphabet } from './data/alphabet'
import { IHangmanCard } from '../../../../models/cards'
import { useEffect, useState } from 'react'

interface Props {
  setRemainingGuesses: React.Dispatch<React.SetStateAction<number>>
  checkGameState: () => void
  remainingGuesses: number
}
export function LetterKeyboard({
  setRemainingGuesses,
  checkGameState,
  remainingGuesses,
}: Props) {
  const data = useQueryClient().getQueryData(['card']) as IHangmanCard
  const queryClient = useQueryClient()
  const [usedLetters, setUsedLetters] = useState([] as string[]) // Used to determine if a letter on the keyboard is greyed out

  useEffect(() => {
    if (data) {
      checkGameState()
    }
  }, [data, remainingGuesses, checkGameState])

  function checkLetter(letter: string) {
    // grey out letter on keyboard
    setUsedLetters((prev) => [...prev, letter])
    // if the letter is correct, add it to the gameboard, else decrement remaining guesses
    if (data.correctLetters.includes(letter)) {
      queryClient.setQueryData(['card'], {
        ...data,
        displayCharacters: [...data.displayCharacters, letter],
      })
    } else {
      setRemainingGuesses((prev) => prev - 1)
    }
    checkGameState()
  }

  return (
    <div className="alphabet">
      {alphabet.map(
        (letter) =>
          (
            <button
              key={letter}
              onClick={() => checkLetter(letter)}
              disabled={usedLetters.includes(letter)}
            >
              {letter}
            </button>
          ) as React.ReactHTMLElement<HTMLButtonElement>,
      )}
    </div>
  )
}
