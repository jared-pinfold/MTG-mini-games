import request from 'superagent'

const rootUrl = '/api/v1/cards'

export function getRandomCard(): Promise<string[]> {
  return request.get(rootUrl + '/hangman').then((res) => {
    return res.body
  })
}
