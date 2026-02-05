import { Footer } from './Footer.tsx'
import { Games } from './Games.tsx'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <div className="app app-container">
        <Header />
        <Games />
        <Footer />
      </div>
    </>
  )
}

export default App
