import React from 'react'
import Stats from './Stats'
import './App.css';

function App() {
  const [username, setUsername] = React.useState('')
  // Keep an extra variable for the current value of the input,
  // based on which the value passed to the Stats component updates _only_ when clicking on the button
  const [inputValue, setInputValue] = React.useState(username)
  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const changeUsername = () => {
    setUsername(inputValue)
  }
  const handleKey = e => {
    if(e.key === 'Enter') {
      changeUsername()
    }
  }
  return (
    <div className="App center mw7">
      <div className="pl6-l pr6-l">
        <h1>GitHub language summary</h1>
        <p>Enter your username to generate programming language statistics about your GitHub profile.</p>
      </div>
      <div className="pl6-l pr6-l flex flex-row mb3">
        <input type="text" value={inputValue} onChange={changeInputValue} onKeyUp={handleKey} className="block"></input>
        <button onClick={changeUsername} className="block">Get</button>
      </div>
      <Stats username={username} />
    </div>
  );
}

export default App;
