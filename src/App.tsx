import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game'
import './App.css'
import PauseGame from './componentsUi/PauseGame'
import { store } from './componentsUi/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/pause" element={<PauseGame />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
