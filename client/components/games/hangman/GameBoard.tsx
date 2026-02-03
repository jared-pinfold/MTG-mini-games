import { WordDisplay } from './WordDisplay'
import { LetterKeyboard } from './LetterKeyboard'
import { Countdown } from './Countdown'

interface Props {
  gameState: string
  setRemainingGuesses: React.Dispatch<React.SetStateAction<number>>
  charactersOrUnderscores: string | undefined
  remainingGuesses: number
  checkGameState(): void
}
export function GameBoard({
  remainingGuesses,
  setRemainingGuesses,
  charactersOrUnderscores,
  checkGameState,
}: Props) {
  return (
    <>
      <Countdown {...{ remainingGuesses }} />
      <WordDisplay {...{ charactersOrUnderscores }} />
      <LetterKeyboard
        {...{ setRemainingGuesses, checkGameState, remainingGuesses }}
      />
    </>
  )
}
