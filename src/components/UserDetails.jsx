import React from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

const UserDetails = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>Детали пользователя {userId}</h1>
      <CommentsList userId={userId} />
    </div>
  );
};

export default UserDetails;