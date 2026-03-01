import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import { Hangman } from './components/games/hangman/Hangman'
import { Menu } from './components/Menu'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Menu />} />
      <Route path="hangman" element={<Hangman />} />
    </Route>,
  ),
)

export default router