import request from 'superagent'
import { IHangmanCard } from '../../models/cards'

const rootUrl = '/api/v1/cards'

export function getRandomCardForHangman(): Promise<IHangmanCard> {
  return request.get(rootUrl + '/hangman').then((res) => {
    return res.body
  })
}
