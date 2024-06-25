

interface Comment {
    id: number;
    name: string;
    body?: string; // Optional property since not all comments may have a body
  }
  
const comments: Comment[] = [
  {
    id: 1,
    name: "user1",
    body: "This is a great article!",
  },
  {
    id: 2,
    name: "user2",
  },
  {
    id: 3,
    name: "user3",
    body: "I agree with user1.",
  },
];

const CommentComponent = () => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          {comment.body && <p>{comment.body}</p>}
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;

export { CommentComponent };
