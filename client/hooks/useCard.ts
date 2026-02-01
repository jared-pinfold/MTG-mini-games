import { useQuery } from '@tanstack/react-query'
import { getRandomCardForHangman } from '../apis/cards.ts'

export function useCard() {
  const query = useQuery({ queryKey: ['card'], queryFn: getRandomCardForHangman })
  return {
    ...query,
  }
}
