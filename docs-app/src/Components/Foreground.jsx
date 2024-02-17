import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "this is the background color of the card",
      fileSize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "this is the background color of the card",
      fileSize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "this is the background color of the card",
      fileSize: ".9mb",
      close: true,
      tag: { isopen: false, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full top-0 left-0 fixed z-[3] h-screen flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} refer={ref} />
      ))}
    </div>
  );
};

export default Foreground;
