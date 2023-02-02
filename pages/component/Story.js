import React from "react";

export default function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 rounded-full pi-[1.5px] border-red-500 border-2 hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
