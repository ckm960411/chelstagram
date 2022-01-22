import { Box, Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addPlayerComment } from "store/playerSlice";

const CommentForm = () => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.player.value)[0]
  const { myInfo } = useSelector(state => state.user)
  const { backNumber } = player
  const [comment, setComment] = useState('')

  const onChangeComment = useCallback((e) => {
    setComment(e.target.value)
  }, [])
  const onSubmitComment = useCallback(() => {
    if (comment === '') return
    if (!myInfo) {
      alert('로그인한 뒤에 댓글을 달 수 있습니다.')
      setComment('')
      return
    }
    const data = { 
      playerId: backNumber, 
      userId: myInfo.id, 
      userName: myInfo.nickname, 
      commentId: uuidv4(), 
      text: comment,
      date: Date.now()
    }
    dispatch(addPlayerComment(data))
    setComment('')
  }, [comment, dispatch, backNumber, myInfo])

  return (
    <Box>
      <TextField
        label={myInfo ? "Add your comment!" : "Only logged-in users can comment."}
        multiline
        rows={2}
        fullWidth
        variant="outlined"
        disabled={!Boolean(myInfo)}
        value={comment}
        onChange={onChangeComment}
      />
      <Button 
        variant="contained" 
        sx={{ float: 'right', marginTop: 1 }}
        onClick={onSubmitComment}
      >
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
