import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 ml-5 mr-2  w-96 shadow-lg h-80 rounded-sm  relative">
    <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url}/>
    <ul>
        <li className="font-bold py-2 text-sm ">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className=" text-gray-600">{statistics.viewCount}  views  •</li>
        {/* <li className=" text-gray-600"> </li> */}
        
    </ul>
  </div>;
};

export default VideoCard;
