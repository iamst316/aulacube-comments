import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Comments from './components/Comments'

function App() {
  

  return (
    <div className='main'>
      <div className="home">
        <Home />
      </div>

      <div class="arrow">
        <a href="#comments">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className="comments" id='comments'>
        <Comments />
      </div>
    </div>
  )
}

export default App
