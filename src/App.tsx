import React from 'react'
import CardDeck from './components/CardDeck'
import CardDraw from './components/CardDraw'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Cards</h2>
      </div>
      <CardDeck />
      <CardDraw />
    </div>
  )
}

export default App
