import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  return (
    <>
      <CommentForm />
      <div>
        <Comment />
        <Comment />
      </div>
    </>
  );
};

export default Comments;
