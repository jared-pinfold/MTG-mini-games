import { useQueryClient } from '@tanstack/react-query'
import { alphabet } from './data/alphabet'
import { IHangmanCard } from '../../../../models/cards'

export function LetterKeyboard( { setRemainingGuesses }: { setRemainingGuesses: React.Dispatch<React.SetStateAction<number>> }) {

  const data = useQueryClient().getQueryData(['card']) as IHangmanCard
  const queryClient = useQueryClient()

  function checkLetter(letter: string) {
    if (data.correctLetters.includes(letter)) {
      queryClient.setQueryData(['card'], {
        ...data,
        displayCharacters: [...data.displayCharacters, letter]
      })
    } else {
      setRemainingGuesses((prev) => prev - 1)
    }
  }

  return (
    <div className="alphabet">
      {alphabet.map(
        (letter) =>
          (
            <button onClick={() => checkLetter(letter)} key={letter}>
              {letter}
            </button>
          ) as React.ReactHTMLElement<HTMLButtonElement>,
      )}
    </div>
  )
}
