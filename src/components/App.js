import React,{useState} from "react";
import video from "../data/video.js";
import Video from './Video';
import CommentSection from './CommentSection';

function App() {
  const [videoArray, setvideoArray] = useState(video);
  const [videoComments, setVideoComments] = useState(videoArray.comments);
  const [videoUpVotes, setVideoUpVotes] = useState(videoArray.upvotes);
  const [videoDownVotes, setVideoDownVotes] = useState(videoArray.downvotes);


  function handleCommentsButton(isOn){
    if(isOn){
      setVideoComments(()=>[])
  }else{
      setVideoComments(()=>videoArray.comments);
    }

  }
  function handleUpVote(){
    setVideoUpVotes((videoUpVotes)=> videoUpVotes + 1);
  }
  function handleDownVote(){
    setVideoDownVotes((videoDownVotes)=> videoDownVotes + 1);
  }
  return (
    <div className="App">
      <Video video={videoArray} upvotes={videoUpVotes} handleUpVote={handleUpVote} handleDownVote={handleDownVote} downvotes={videoDownVotes} handleCommentsButton={handleCommentsButton}></Video>
      <CommentSection comments={videoComments}></CommentSection>
    </div>

  );
}

export default App;
