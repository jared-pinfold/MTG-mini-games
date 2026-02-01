import { useState } from 'react'
import { Menu } from './Menu'
import { Hangman } from './games/Hangman'

export function Games() {
  const [game, setGame] = useState('menu')
  if (game === 'menu') return <Menu setGame={setGame} />
  if (game === 'hangman') return <Hangman />
  return
}
