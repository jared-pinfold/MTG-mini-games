import request from 'superagent'
import { IHangmanCard } from '../../models/cards'

const rootUrl = {
  local: '/api/v1/cards',
  deployed: 'http://mtg-express.borb.nz/api/v1/cards',
}

const environment = 'deployed'

export function getRandomCardForHangman(): Promise<IHangmanCard> {
  return request.get(rootUrl[environment] + '/hangman').then((res) => {
    return res.body
  })
}
