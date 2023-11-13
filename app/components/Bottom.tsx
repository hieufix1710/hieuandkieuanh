import React from "react";
import Audio from "./Audio";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

export default function Bottom() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="sticky bottom-0 p-2 left-0 bg-white w-full z-10">
      <div className="flex flex-row justify-between items-center">
        <Audio />
        {/* <ArrowSmallUpIcon
          className="w-7 cursor-pointer"
          onClick={() => scrollTop()}
        /> */}
      </div>
    </div>
  );
}
