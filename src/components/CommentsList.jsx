import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = ({ userId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        params: { postId: userId },
      })
      .then((response) => {
        setComments(response.data.slice(0, 15)); // Берём только 15 комментариев
      });
  }, [userId]);

  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong>: {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
