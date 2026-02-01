import { useCard } from '../hooks/useCard.ts'

function App() {
  const { data } = useCard()
  console.log(data)

  return (
    <>
      <div className="app">
        <h1>MTG minigames</h1>
      </div>
    </>
  )
}

export default App
