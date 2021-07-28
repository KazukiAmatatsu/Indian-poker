import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { user } from '../recoil/atom'
import { useHistory } from 'react-router-dom'

const RedirectTop = () => {
  const userInfo = useRecoilValue(user)
  const history = useHistory()
  useEffect(() => {
    if (!userInfo.id || !userInfo.name) {
      history.push('/')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

export default RedirectTop
