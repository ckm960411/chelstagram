import { Avatar, Divider, Grid, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Comment = ({ comment }) => {
  const { userId, text, profileImg } = comment

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ background: '#001487' }}>{userId[0]}</Avatar>
        </Grid>
        <Grid item justifyContent="left" xs zeroMinWidth>
          <h4 style={{ margin: '10px 0' }}>{userId}</h4>
          <p>{text}</p>
          <Typography variant="button">2 hours ago</Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="more button">
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ margin: '10px 0' }} />
    </>
  )
}

export default Comment