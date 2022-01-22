import { useEffect, useState } from "react";
import { format, formatDistanceToNowStrict } from "date-fns";
import { styled, alpha } from '@mui/material/styles'
import { Avatar, Divider, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { 
  MoreVert as MoreVertIcon ,
  Edit as EditIcon,
  ReportProblem as ReportProblemIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useSelector } from "react-redux";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Comment = ({ comment }) => {
  const [timeAgo, setTimeAgo] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const { myInfo } = useSelector(state => state.user)
  const { userName, text, date, userId } = comment
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setTimeAgo(formatDistanceToNowStrict(date))
  }, [date])

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ background: '#001487' }}>{userName[0]}</Avatar>
        </Grid>
        <Grid item justifyContent="left" xs zeroMinWidth>
          <h4 style={{ margin: '10px 0' }}>{userName}</h4>
          <p>{text}</p>
          <Typography variant="body2">{format(date, "yyyy.MM.dd kk:mm")} ({timeAgo} ago)</Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="more button" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            { myInfo && myInfo.id === userId ? (
              <div>
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <DeleteIcon />
                  Delete
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem onClick={handleClose} disableRipple>
                  <ReportProblemIcon />
                  Report Problem
                </MenuItem>
              </div>
            )}
          </StyledMenu>
        </Grid>
      </Grid>
      <Divider sx={{ margin: '10px 0' }} />
    </>
  )
}

export default Comment