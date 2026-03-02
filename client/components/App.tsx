import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <div className="app app-container">
        <Header />
        <div className="content-wrap">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
