import React, { useState } from 'react'
import { db } from '../config/firebase'

type Card = {
  mark: string
  number: number
  used: boolean
}

const CardDraw = () => {
  const trumpRef = db.collection('trump')
  const drawRef = trumpRef.where('used', '==', false).limit(1)
  const [id, setId] = useState<string>()
  const [card, setCard] = useState<Card | any>()

  const draw = async () => {
    drawRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setId(doc.id)
          setCard(doc.data())
        })
      })
      .catch((error) => {
        console.log(error)
      })
    trumpRef
      .doc(id)
      .update({
        used: true
      })
      .then(() => {
        console.log('ok')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // console.log(id)
  console.log(card)

  return (
    <div>
      <button onClick={() => draw()}>ドロー</button>
      <span>
        {card?.mark}
        {card?.number}
      </span>
    </div>
  )
}

export default CardDraw
