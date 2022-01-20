import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  const player = useSelector(state => state.player.value)[0]
  const { comments } = player

  return (
    <>
      <CommentForm />
      <div>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  );
};

export default Comments;
