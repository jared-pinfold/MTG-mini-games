import { Router } from 'express'
import { IHangmanCard } from '../../models/cards'

const router = Router()

const baseURL = 'https://api.scryfall.com'

router.get('/hangman', async (req, res) => {
  try {
    const response = await fetch(`${baseURL}/cards/random`)
    const result = await response.json()
    const { name, image_uris } = result
    const punctuation = new Array(
      ...new Set(name.split('').filter((c: string) => c.match(/[^a-zA-Z0-9]/))),
    ) as string[]
    res.json({ name, image: image_uris.normal, punctuation } as IHangmanCard)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
