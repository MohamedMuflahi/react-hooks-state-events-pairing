import React from "react";


function Comment({comments}){
    return (
      <>
        {comments.map((element)=>{
          return(
            <>
            <h2>{element.user}</h2>
            <p>{element.comment}</p>
            </>
          )
        })}
      </>
    );
}
export default Comment