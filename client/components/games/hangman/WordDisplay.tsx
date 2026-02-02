// import { useQueryClient } from '@tanstack/react-query'
// import { IHangmanCard } from '../../../../models/cards'

export function WordDisplay({ charactersOrUnderscores }: { charactersOrUnderscores: string | undefined }) {
  // const data = useQueryClient().getQueryData(['card']) as IHangmanCard


  return (
    <>
      <p>{charactersOrUnderscores}</p>
    </>
  )
}
