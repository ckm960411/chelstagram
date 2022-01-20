import { Box, Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState('')

  const onChangeComment = useCallback((e) => {
    setComment(e.target.value)
  }, [])
  const onSubmitComment = useCallback(() => {
    if (comment === '') return
    console.log(comment.trim())
    setComment('')
  }, [comment])

  return (
    <Box>
      <TextField
        label="comment"
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
