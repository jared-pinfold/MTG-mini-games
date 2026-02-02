import { useQueryClient } from '@tanstack/react-query'

import { IHangmanCard } from '../../../../models/cards'
import { WordDisplay } from './WordDisplay'
import { LetterKeyboard } from './LetterKeyboard'
import { Countdown } from './Countdown'

interface Props {
  gameState: React.MutableRefObject<string>
  setRemainingGuesses: React.Dispatch<React.SetStateAction<number>>
  charactersOrUnderscores: string | undefined
  remainingGuesses: number
}
export function GameBoard({ gameState, remainingGuesses, setRemainingGuesses, charactersOrUnderscores }: Props) {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(['card']) as IHangmanCard

  return (
    <>
    <Countdown {...{ remainingGuesses }}/>
      <WordDisplay {...{ charactersOrUnderscores }} />
      <LetterKeyboard {...{ setRemainingGuesses }} />
    </>
  )
}
