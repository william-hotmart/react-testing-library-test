import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleClickUp = () => setCount(count => count + 1)
  const handleClickDown = () => setCount(count => count - 1)

  return (
    <div>
      <p data-testid="counter">{count}</p>

      <button onClick={handleClickDown}>-</button>
      <button onClick={handleClickUp}>+</button>
    </div>
  )
}

export default App
