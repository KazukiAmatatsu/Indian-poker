import React, { useState } from 'react'
import { db } from '../config/firebase'

type Card = {
  mark: string
  number: number
}

const CardDeck = () => {
  const trumpRef = db.collection('trump')
  const [deck, setDeck] = useState<Card[]>([])

  // トランプをFireStoreに追加する
  const trumpSet = () => {
    const mark = ['♠', '♥', '♦', '♣']
    for (let i = 1; i < 14; i++) {
      for (let m = 0; m < 4; m++) {
        trumpRef.add({
          mark: mark[m],
          number: i
        })
      }
    }
  }

  // トランプを削除する
  const trumpDelete = () => {
    trumpRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        trumpRef
          .doc(doc.id)
          .delete()
          .then(() => {
            console.log('できた')
          })
          .catch((error) => {
            console.log(error)
          })
      })
    })
  }

  // トランプの監視
  const observe = () => {
    trumpRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data()) as any | undefined
      if (data) {
        setDeck(data)
      }
    })
  }

  console.log(deck)

  return (
    <div>
      <button onClick={() => trumpSet()}>トランプ</button>
      <button onClick={() => trumpDelete()}>削除</button>
      <button onClick={() => observe()}>監視</button>
      {
        // すべてのカードの内容を表示する
        deck.map((card) => {
          return (
            <span>
              {card.mark}
              {card.number}
            </span>
          )
        })
      }
    </div>
  )
}

export default CardDeck
