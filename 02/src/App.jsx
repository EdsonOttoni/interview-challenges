import { useState } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState([])
  
  function handleClick(event) {
    const newDot = {
      positionX: event.pageX,
      positionY: event.pageY,
    }

    setPosition((prev) => [...prev, newDot])
  }

  function handleUndo() {
    if (position.length === 0) {
      return;
    }

    setPosition((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  }

  function handleRedo(event) {
    console.log('redo')
  }

  return (
    <div id="page" onClick={handleClick}>
      <button type="button" onClick={handleUndo}>Desfazer</button>
      <button type="button" onClick={handleRedo}>Refazer</button>

      {position.map((item, index) => (
        <span
          key={index}
          className='dot'
          style={{ left: item.positionX, top: item.positionY }}
        />
      ))}
    </div>
  )
}

export default App
