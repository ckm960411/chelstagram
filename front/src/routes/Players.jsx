import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AppLayout from 'components/AppLayout'
import PlayerCard from 'components/PlayerCard'

const Item = styled(PlayerCard)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const players = () => {
  return (
    <>
      <AppLayout>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} xl={3} sx={{ textAlign: 'center' }}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PlayerCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <PlayerCard />
            </Grid>
          </Grid>
        </div>
      </AppLayout>
    </>
  )
}

export default players