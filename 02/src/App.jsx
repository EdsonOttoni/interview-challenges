import { useState } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState([])
  const [unDid, setUnDid] = useState([])

  function handleClick(event) {
    const newDot = {
      positionX: event.pageX,
      positionY: event.pageY,
    }

    setPosition((prev) => [...prev, newDot])
    setUnDid([])
  }

  function handleUndo() {
    if (position.length === 0) {
      return
    }

    const lastPosition = position[position.length - 1];
    setUnDid((prev) => [...prev, lastPosition]);

    setPosition((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
  }

  function handleRedo() {
    if (unDid.length === 0) {
      return;
    }

    const recoveredDot = unDid[unDid.length - 1];
    setUnDid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setPosition((prev) => [...prev, recoveredDot]);
  }

  return (
    <>
      <button type="button" onClick={handleUndo}>
        Desfazer
      </button>
      <button type="button" onClick={handleRedo}>
        Refazer
      </button>

      <div id="page" onClick={handleClick}>
        {position.map((item, index) => (
          <span
            key={index}
            className="dot"
            style={{ left: item.positionX, top: item.positionY }}
          />
        ))}
      </div>
    </>
  )
}

export default App
