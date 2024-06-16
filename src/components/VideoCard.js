import React from "react";
import { RxDotFilled } from "react-icons/rx";
import moment from "moment/moment";
import { kFormatter } from "../utils/constants";
const VideoCard = ({ info, filter }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="space-y-1 mb-2 md:w-[19.5rem] md:m-3 md:my-5 cursor-pointer p-1 rounded-lg">
      <img
        src={thumbnails?.medium?.url}
        alt="thubnail"
        className="rounded-xl w-full"
      />
      <div className="flex flex-col px-2">
        <h2 className="font-normal">{title}</h2>
        <div className="flex flex-col text-sm font-normal  text-gray-500 ">
          <p>{channelTitle}</p>
          {filter === null && (
            <div className="flex flex-row">
              <div>{kFormatter(statistics?.viewCount)} views </div> 
              <div><RxDotFilled /> </div>
              <div>{moment(publishedAt).fromNow()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;