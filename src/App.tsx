import  { useState } from 'react';
import './App.css';
import './Components/comment';

interface CommentType {
  id: number;
  name: string;
}

function App() {
  // Example comment
  const initialComment: CommentType = {
    id: 1,
    name: "hjhjh",
  };

  // State for comments
  const [comments, setComments] = useState<CommentType[]>([initialComment]);

  const handleAddComment = () => {
    const newComment: CommentType = {
      id: comments.length + 1,
      name: "New Comment",
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="app">
      {comments.map((comment) => (
        <div key={comment.id}>{comment.name}</div>
      ))}
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default App;
