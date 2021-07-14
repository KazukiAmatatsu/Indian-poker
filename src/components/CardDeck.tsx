import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase'

type Card = {
  name: string
  color: string
}

type Deck = {
  cards: Card[]
}

const CardDeck = () => {
  const [deck, setDeck] = useState<Deck>({ cards: [] })

  useEffect(() => {
    // 52枚のトランプを生成してfireStoreに登録する
    const deckRef = db.collection('trump card').doc('deck')
    const cards: Card[] = [
      { name: '♠', color: '#000000' },
      { name: '♥', color: '#ff0000' },
      { name: '♦', color: '#ff0000' },
      { name: '♣', color: '#000000' }
    ]
      .map((suit) => [
        ...Array.from(Array(13).keys()).map((i) => {
          return { name: suit.name + (i + 1), color: suit.color }
        })
      ])
      .flat()

    deckRef.update({ cards: cards })

    // deckを監視してカードに変化があれば受信する
    deckRef.onSnapshot((doc) => {
      const deck = doc.data() as Deck | undefined
      if (deck) {
        setDeck(deck)
      }
    })
  }, [])

  return (
    <div className="CardGame">
      <h2>Deck</h2>
      <div className="Deck">
        {
          // すべてのカードの内容を表示する
          deck.cards.map((card) => {
            return <span style={{ color: card.color }}>{card.name}</span>
          })
        }
      </div>
    </div>
  )
}

export default CardDeck
