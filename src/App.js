import React, { useEffect, useRef } from 'react'
import Stats from './Stats'
import './App.css';

function App() {
  const updateFromHash = () => {
    let hash = window.location.hash
    if (hash.startsWith('#')) {
      hash = hash.slice(1)
    }
    if (hash.startsWith('/')) {
      hash = hash.slice(1)
    }
    const split = hash.split('/')
    if (split[0] === 'user' && typeof split[0] === 'string') {
      const username = split[1]
      setInputValue(username)
      setUsername(username)
    }
  }
  const [username, setUsername] = React.useState('')
  // Keep an extra variable for the current value of the input,
  // based on which the value passed to the Stats component updates _only_ when clicking on the button
  const [inputValue, setInputValue] = React.useState(username)
  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const changeUsername = () => {
    window.location.hash = '/user/' + inputValue
  }
  const handleKey = e => {
    if (e.key === 'Enter') {
      changeUsername()
    }
  }
  const inputRef = useRef()
  window.addEventListener('hashchange', updateFromHash)
  useEffect(() => {
    updateFromHash()
  },
  [inputRef])
  return (
    <div className="App center mw7">
      <div className="pl6-l pr6-l">
        <h1>GitHub language summary</h1>
        <p>Enter your username to generate programming language statistics about your GitHub profile.</p>
      </div>
      <div className="pl6-l pr6-l flex flex-row mb3">
        <input type="text" value={inputValue} onChange={changeInputValue} onKeyUp={handleKey} ref={inputRef} className="block"></input>
        <button onClick={changeUsername} className="block">Get</button>
      </div>
      <Stats username={username} />
    </div>
  );
}

export default App;
