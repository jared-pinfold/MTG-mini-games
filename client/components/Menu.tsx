type Props = {
  setGame: React.Dispatch<React.SetStateAction<string>>
}

export function Menu({ setGame }: Props) {
  return (
    <>
    <p>Pick a game:</p>
      <button onClick={() => setGame('hangman')}>Hangman</button>
    </>
  )
}
