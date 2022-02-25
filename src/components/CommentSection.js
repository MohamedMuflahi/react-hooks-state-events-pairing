import React from "react";
import Comment from "./Comment";

function CommentSection({comments}){
    return (
      <>
        <h1>{comments.length} Comments</h1>
        <Comment comments={comments}></Comment>
      </>
    );
}
export default CommentSection