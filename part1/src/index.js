import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you're probably born in {bornYear()} </p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ counter, setCounter] = useState(0)
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])
  const [ value, setValue ] = useState(10)
  // const [ clicks, setClicks ] = useState({ left: 0, right: 0 })

  // const handleLeftClick = () => 
  //   setClicks({ ...clicks, left: clicks.left + 1 })

  // const handleRightClicks = () => 
  //   setClicks({ ...clicks, right: clicks.right + 1 })

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const setToValue = (newValue) => {
      setValue(newValue)
    }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log("returning....", counter)
  
  return (
    <div>
        <Display counter={counter} />
        <Button handleClick={increaseByOne}
          text='plus'
        />
       <Button handleClick={decreaseByOne}
          text='minus'
        />
        <Button handleClick={setToZero}
          text='zero'
        />
        <h1>Greetings</h1>
        <Hello name='Nasir' age='23' />

        {left}
        {/* <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button> */}
        <Button handleClick={handleLeftClick} text='left'/>
        <Button handleClick={handleRightClick} text='right'/>
        {right}
        
        <History allClicks={allClicks} />

        {value}
        <button onClick={() => setToValue(1000)}>thousand</button>
        <button onClick={() => setToValue(0)}>reset</button>
        <button onClick={() => setToValue(value + 1)}>increment</button>

    </div>
  )
}

let counter = 1

ReactDOM.render(<App />, document.getElementById('root'))
