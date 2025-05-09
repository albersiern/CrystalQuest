import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Game from './components/Game'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Crystal Quest</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/game">Play Game</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div className="home-page">
                <h2>Welcome to Crystal Quest</h2>
                <p>A puzzle adventure inspired by The Witness</p>
                <Link to="/game" className="play-button">Start Playing</Link>
              </div>
            } />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
