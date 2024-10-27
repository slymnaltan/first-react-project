import { useState } from 'react'
import "./styles/App.css";
import{Routes , Route , Link} from 'react-router-dom'
import Home from './Home'
import TodoApp from './TodoApp'
import CalculatorApp from './CalculatorApp'
function App() {

  return (
    <div className='house'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo' element={<TodoApp />} />
        <Route path='calculator' element={<CalculatorApp />} />
      </Routes>
    </div>
  )
}

export default App
