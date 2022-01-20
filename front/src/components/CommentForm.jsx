import { Box, Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPlayerComment } from "store/playerSlice";

const CommentForm = () => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.player.value)[0]
  const { backNumber } = player
  const [comment, setComment] = useState('')

  const onChangeComment = useCallback((e) => {
    setComment(e.target.value)
  }, [])
  const onSubmitComment = useCallback(() => {
    if (comment === '') return
    const data = { playerId: backNumber, userId: 'KMin', text: comment}
    dispatch(addPlayerComment(data))
    setComment('')
  }, [comment, dispatch, backNumber])

  return (
    <Box>
      <TextField
        label="Add your comment!"
        multiline
        rows={2}
        fullWidth
        variant="outlined"
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
