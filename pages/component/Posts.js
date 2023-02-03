import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "varun",
      userImg: "https://avatars.githubusercontent.com/u/56426091",
      img: "https://images.unsplash.com/photo-1675277595234-a7c5ec9b2e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      caption: "Thanks for your nice picture",
    },
    {
      id: "2",
      username: "kumar",
      userImg: "https://avatars.githubusercontent.com/u/56426091",
      img: "https://images.unsplash.com/photo-1675250555402-6383eb698c2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "your nice picture",
    },
  ];
  return (
    <div>
      {posts.map((item) => (
        <Post
          key={item.id}
          id={item.id}
          username={item.username}
          userImg={item.userImg}
          image={item.img}
          caption={item.caption}
        />
      ))}
    </div>
  );
}
