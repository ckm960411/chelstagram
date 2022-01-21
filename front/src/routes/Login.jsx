import { Card, CardHeader, CardMedia } from '@mui/material'
import AppLayout from 'components/AppLayout'
import LoginDrawer from 'components/LoginDrawer'
import logoImg from 'imgs/chellogo.png'

const Login = () => {
  return (
    <AppLayout>
      <LoginDrawer />
    </AppLayout>
  )
}

export default Login