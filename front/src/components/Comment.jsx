import { useCallback, useEffect, useRef, useState } from "react";
import { format, formatDistanceToNowStrict } from "date-fns";
import { styled, alpha } from '@mui/material/styles'
import { Alert, Avatar, Button, Divider, Grid, IconButton, Menu, MenuItem, TextField, Typography } from "@mui/material"
import { MoreVert as MoreVertIcon, Edit as EditIcon, ReportProblem as ReportProblemIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import { deletePlayerComment, editPlayerComment } from "store/playerSlice";

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

const Comment = ({ comment, playerId }) => {
  const { myInfo } = useSelector(state => state.user)
  const { userName, text, date, userId, id } = comment

  const editCommentRef = useRef()
  const dispatch = useDispatch()

  const [timeAgo, setTimeAgo] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const [editing, setEditing] = useState(false)
  const [commentError, setCommentError] = useState('')
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

  const onEditComment = useCallback(() => {
    handleClose()
    setEditing(true)
  }, [])
  const onSubmitComment = useCallback(() => {
    if (editCommentRef.current.value.trim() === '') {
      return setCommentError("There can't be empty content in the comments.")
    }
    if (!myInfo) {
      alert('You can modify the comments after logging in.')
      return
    }
    const data = { 
      id,
      playerId,
      text: editCommentRef.current.value.trim(),
    }
    dispatch(editPlayerComment(data))
    setEditing(false)
  }, [dispatch, playerId, myInfo, id])
  const onDeleteComment = useCallback(() => {
    if (!myInfo) {
      alert('You can only delete your own comments.')
      return
    }
    const ok = window.confirm('Do you really want to delete the comments?')
    if (!ok) return handleClose()
    const data = { id, playerId }
    dispatch(deletePlayerComment(data))
    handleClose()
  }, [dispatch, id, playerId, myInfo])

  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ background: '#001487' }}>{userName[0]}</Avatar>
        </Grid>
        <Grid item justifyContent="left" xs zeroMinWidth>
          <h4 style={{ margin: '10px 0' }}>{userName}</h4>
          { editing ? (
            <>
              <TextField
                defaultValue={text}
                multiline
                rows={2}
                fullWidth
                variant="outlined"
                inputRef={editCommentRef}
              />
              <Button
                variant="contained" 
                sx={{ float: 'right', marginTop: 1 }}
                onClick={onSubmitComment}
              >
                Edit Comment
              </Button>
              <Button
                variant="outlined" 
                sx={{ float: 'right', marginTop: 1, marginRight: 1 }}
                onClick={() => setEditing(false)}
              >
                Cancel
              </Button>
              { commentError && (
                <Alert
                  severity="warning" 
                  onClose={() => setCommentError('')}
                  sx={{ marginTop: 7  }}
                >
                  "There can't be empty content in the comments."
                </Alert>
              )}
            </>
          ) : (
            <>
              <p>{text}</p>
              <Typography variant="body2">{format(date, "yyyy.MM.dd kk:mm")} ({timeAgo} ago)</Typography>
            </>
          )}
        </Grid>
        { editing || (
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
                  <MenuItem onClick={onEditComment} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={onDeleteComment} disableRipple>
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
        )}
        </Grid>
      <Divider sx={{ margin: '10px 0' }} />
    </>
  )
}

export default Comment