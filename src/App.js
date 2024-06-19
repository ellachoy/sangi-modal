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
            <input type='text' id='first-name' placeholder='Enter SNR Number' />
          </li>
          <div className='divider'></div>
          <li>
            <label for='last-name'>Aktuelles SNR</label>
            <input type='text' id='last-name' />
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
          {/* <li>
            <label for='message'>Message</label>
            <textarea
              rows='6'
              id='message'
              placeholder='Enter your message here'
            ></textarea>
          </li> */}
          {/* <li>
            <p>Age</p>
            <ul class='flex-inner'>
              <li>
                <input type='checkbox' id='twenty-to-twentynine' />
                <label for='twenty-to-twentynine'>20-29</label>
              </li>
              <li>
                <input type='checkbox' id='thirty-to-thirtynine' />
                <label for='thirty-to-thirtynine'>30-39</label>
              </li>
              <li>
                <input type='checkbox' id='fourty-to-fourtynine' />
                <label for='fourty-to-fourtynine'>40-49</label>
              </li>
              <li>
                <input type='checkbox' id='fifty-to-fiftynine' />
                <label for='fifty-to-fiftynine'>50-59</label>
              </li>
              <li>
                <input type='checkbox' id='sixty-to-sixtynine' />
                <label for='sixty-to-sixtynine'>60-69</label>
              </li>
              <li>
                <input type='checkbox' id='other' />
                <label for='other'>Other</label>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <button type='submit'>Submit</button>
          </li> */}
        </ul>
      </form>
    </div>
  )
}

export default App
