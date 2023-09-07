import { useState } from 'react'

import './App.css'

function App() {
  const [count0, setCount0] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const countArr = [count0, count1, count2, count3]
  const emojiArr = ['😁', '🤔', '😥', '😎']
  const [bestEmoji, setBestEmoji] = useState('')
  
  function calculateBestEmoji() {
    const emoji = emojiArr[countArr.indexOf(Math.max(...countArr))]
    setBestEmoji(emoji)  
  }

  return (
    <>
      <p className="read-the-docs">
        Click on your favourite emoji
      </p>
      <div className="card">
        <button onClick={() => setCount0((count) => count + 1)}>
          vote for {emojiArr[0]} {count0}
        </button>
        <button onClick={() => setCount1((count) => count + 1)}>
          vote for {emojiArr[1]}  {count1}
        </button>
        <button onClick={() => setCount2((count) => count + 1)}>
          vote for {emojiArr[2]}  {count2}
        </button>
        <button onClick={() => setCount3((count) => count + 1)}>
          vote for {emojiArr[3]}  {count3}
        </button>
      </div>
      <div className="card">
        <button onClick={calculateBestEmoji}>
          show best emoji
        </button>
        <p>best emoji is {bestEmoji}</p>
      </div>

    </>
  )
}

export default App
