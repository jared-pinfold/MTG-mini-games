type Props = {
  setGame: React.Dispatch<React.SetStateAction<string>>
}

export function Menu({ setGame }: Props) {
  return (
    <>
      <button onClick={() => setGame('hangman')}>Hangman</button>
    </>
  )
}
