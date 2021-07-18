import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const StartButton = () => {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(true)

  const hostButton = () => {
    setIsOpen(false)
    history.push('/HostStandBy')
  }

  const GuestButton = () => {
    setIsOpen(false)
    history.push('/GuestStandby')
  }

  return (
    <>
      {isOpen ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Game Start</button>
        </>
      ) : (
        <>
          <button onClick={hostButton}>ホストではじめる</button>
          <button onClick={GuestButton}>ゲストではじめる</button>
        </>
      )}
    </>
  )
}
