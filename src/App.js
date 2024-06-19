import React from 'react'

import './App.css'

function App() {
  return (
    <div class='container'>
      <h1>Main Content</h1>
      <form>
        <ul className='flex-outer'>
          <li className='such-input'>
            <label for='first-name'>Such SNR</label>
            <input type='text' placeholder='Enter SNR Number' />
          </li>
          <div className='divider'></div>
          <li>
            <label for='last-name'>Aktuelles SNR</label>
            <input type='text' />
          </li>
          <li>
            <label for='email'>Label 1</label>
            <input type='text' />
          </li>
          <li>
            <label for='phone'>Label 2</label>
            <input type='text' />
          </li>
          <li>
            <label for='email'>Label 3</label>
            <input type='text' />
          </li>
          <li>
            <label for='phone'>Label 4</label>
            <input type='text' />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default App
