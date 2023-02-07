import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import React from "react";

const Post = ({ username, image, userImg, caption, id }) => {
  return (
    <div className="bg-white my-7 border rounded">
      {/* post header */}
      <div className="flex items-center">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* post image */}
      <img className="object-cover w-full" src={image} alt="" />
      {/* post buttons */}
      <div className=" flex justify-between px-4 pt-4">
        <div className=" flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* post comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {/* post input box */}
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Enter your comments.."
          className="border-none flex-1 focus:ring-0"
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
};

export default Post;