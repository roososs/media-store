import { Routes, Route } from 'react-router-dom'
import Files from './Files'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Files />} />
      </Routes>
    </div>
  )
}

export default App
