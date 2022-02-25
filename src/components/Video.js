import React,{useState} from "react";

function Video({video, handleCommentsButton,upvotes,handleUpVote,handleDownVote,downvotes}){
    const [isOn, setisOn] = useState(true)
    const [hasVoted, setHasVoted] = useState(false)

    return (
      <>
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
        <p>
          {video.views} Views | Uploaded {video.createdAt}
        </p>
        <button onClick={handleUpVote}>{upvotes} 👍</button>
        <button onClick={handleDownVote}>{downvotes} 👎</button>
        <br />
        <br />
        <button
          onClick={() => {
            if (isOn) {
              setisOn(() => false);
              handleCommentsButton(true);
            } else {
              setisOn(() => true);
              handleCommentsButton(false);
            }
          }}
        >
          {isOn ? "Hide" : "Show"} Comments
        </button>
        <hr></hr>
      </>
    );
}
export default Video