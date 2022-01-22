import { useSelector } from "react-redux";
import Comment from "components/Comment";
import CommentForm from "components/CommentForm";

const Comments = () => {
  const player = useSelector(state => state.player.value)[0]
  const { comments, backNumber } = player

  return (
    <>
      <CommentForm />
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} playerId={backNumber} />
        ))}
      </div>
    </>
  );
};

export default Comments;
