import React from "react";
import "../output.css";

const Loading = () => {
  return (
    <main className="h-dvh w-dvw flex flex-col justify-center items-center gap-6 font-afacad overflow-hidden">
      {" "}
      {/* Skeleton for the 404 and Ghost */}{" "}
      <div className="upper-container h-fit w-fit flex justify-center items-center gap-3 sm:gap-4">
        <div className="h-[120px] w-[80px] md:h-[160px] md:w-[100px] bg-neutral-200 animate-pulse rounded-md">
          {" "}
        </div>{" "}
        <div className="h-[130px] w-[130px] sm:h-[150px] sm:w-[150px] bg-neutral-200 animate-pulse rounded-full">
          {" "}
        </div>{" "}
        <div className="h-[120px] w-[80px] md:h-[160px] md:w-[100px] bg-neutral-200 animate-pulse rounded-md">
          {" "}
        </div>{" "}
      </div>
      {/* Skeleton for the text content */}{" "}
      <div className="lower-container h-fit w-fit text-center flex flex-col gap-4">
        <div className="container-heading h-[40px] w-[300px] sm:w-[350px] md:w-[400px] bg-neutral-200 animate-pulse rounded-md">
          {" "}
        </div>{" "}
        <div className="container-paragraph h-[24px] w-[350px] sm:w-[400px] md:w-[500px] bg-neutral-200 animate-pulse rounded-md">
          {" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default Loading;
