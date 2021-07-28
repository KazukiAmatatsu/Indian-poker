import { useHistory } from 'react-router-dom'

const ContinueButton = () => {
  const history = useHistory()
  return (
    <div>
      <button>もう一度あそぶ</button>
      <button onClick={() => history.goBack()}>部屋を出る</button>
    </div>
  )
}

export default ContinueButton
