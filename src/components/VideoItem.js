import React from 'react';
import   './VideoItem.css';
const VideoItem = ({video, onVideoSelect}) => {
console.log(video)
   return (
 <div  onClick={() =>  onVideoSelect(video)}    className= "video-item item">
  
    <img class="ui image" src= {video.snippet.thumbnails.medium.url}  alt={video.snippet.title} />
 <div className="content">

   <div class="header"> {video.snippet.title}</div>

 </div>
   


 </div>

   );


}
export default VideoItem;