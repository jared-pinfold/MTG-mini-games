import { useQuery } from '@tanstack/react-query'
import { getRandomCard } from '../apis/cards.ts'

export function useCard() {
  const query = useQuery({ queryKey: ['card'], queryFn: getRandomCard })
  return {
    ...query,
  }
}
