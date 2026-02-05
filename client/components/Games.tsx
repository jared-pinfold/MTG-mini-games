import { useState } from 'react'
import { Menu } from './Menu'
import { Hangman } from './games/hangman/Hangman'

export function Games() {
  const [game, setGame] = useState('menu')

  return (
    <div className="content-wrap">
      {game === 'menu' && <Menu setGame={setGame} />}
      {game === 'hangman' && <Hangman />}
    </div>
  )
}
