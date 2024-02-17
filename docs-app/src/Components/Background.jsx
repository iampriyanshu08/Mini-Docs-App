import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
      <div className=" absolute top-[5%] w-full p-10  text-zinc-600 text-xl font-semibold flex justify-center">
        Documents
      </div>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-center text-[13vw] leading-none tracking-tighter font-semibold">
        Docs.
      </h1>
      </div>
    </>
  );
};

export default Background;
