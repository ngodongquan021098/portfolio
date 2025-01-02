import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>} />
      </Routes>
    </Router>
  )
}

export default App
