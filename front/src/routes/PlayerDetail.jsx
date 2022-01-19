import AppLayout from 'components/AppLayout'
import { useParams } from 'react-router-dom'

const PlayerDetail = () => {
  const params = useParams()
  const playerId = Number(params.id)
  console.log(playerId)

  return (
    <AppLayout>
      player number: {playerId}
    </AppLayout>
  )
}

export default PlayerDetail