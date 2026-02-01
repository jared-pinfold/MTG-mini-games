import { useCard } from "../../hooks/useCard"
import { Error } from "../Error"
import { Loading } from "../Loading"

export function Hangman () {
  
  const {data: card, isError, isLoading} = useCard()
  console.log(card)
  if (isError) return <Error/>
  if (isLoading) return <Loading />

  if (card) return <>
  <h2>Hangman</h2>
  <p>{card.name}</p>
  <img src={card.image} alt={''}/>
  </>
}