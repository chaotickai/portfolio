import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export const colors = ['red', 'green', 'blue', 'yellow', 'orange']
export const randNum = () => Math.floor(Math.random()*colors.length);
export const randColor = (colors, randNum) => colors[randNum()];

function App() {

  const [backgroundColor, setBackgroundColor] = useState('purple')

  const changeColor = () => {
    let backgroundColor = randColor(colors, randNum);
    setBackgroundColor(backgroundColor)
  }

  const theStyles = {
    width: "50%",
    margin: '10% auto',
    border: '5px orange solid',
    backgroundColor: backgroundColor
  }

  return (
    <div className="App" data-test="component-app" style={theStyles}>
      <h1>Hello</h1>
      <button onClick={changeColor}>Click Me</button>
    </div>
  );
}

export default App;
