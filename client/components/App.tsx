import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <div className="app app-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
