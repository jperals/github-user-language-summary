import React from 'react'
import Stats from './components/Stats'
import './App.css';

function App() {
  const [username, setUsername] = React.useState('')
  // Keep an extra variable for the current value of the input,
  // based on which the value passed to the Stats component updates _only_ when clicking on the button
  const [inputValue, setInputValue] = React.useState(username)
  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const changeUsername = async () => {
    setUsername(inputValue)
  }
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeInputValue}></input>
      <button onClick={changeUsername}>Get</button>
      <Stats username={username}/>
    </div>
  );
}

export default App;
