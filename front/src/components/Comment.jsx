import { Avatar, Divider, Grid, IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Comment = () => {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ background: '#001487' }}>K</Avatar>
        </Grid>
        <Grid item justifyContent="left" xs zeroMinWidth>
          <h4 style={{ margin: '10px 0' }}>hello</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea cuadfadsm aperiam odit dicta! Officia perferendis cumque incidunt earum laudantium, repudiandae commodi, quisquam, ea vero illo sunt ut alias facere!
          </p>
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