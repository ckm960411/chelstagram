import AppLayout from 'components/AppLayout'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const { myInfo } = useSelector(state => state.user)

  useEffect(() => {
    if(!myInfo) {
      alert('먼저 로그인을 해주세요!')
      navigate('/')
    }
  })

  return (
    <AppLayout>
      Profile
    </AppLayout>
  )
}

export default Profile