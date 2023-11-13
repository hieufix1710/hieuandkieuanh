import {
  ArrowSmallUpIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import NextImage from "next/image";
import pic3 from "../../public/images/gallery/pic3.jpg";

const audios = [
  {
    src: "/audio/mus.mp3",
    title: "Take My Heart And Take My Hand",
    artist: "Emily Hackett · Will Anderson",
  },
];

export default function Audio() {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<any>();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current!.duration);
      if (isPlay) audioRef.current!.play();
    }
  };
  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
    }
    setIsPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }: any) => {
    audioRef.current!.currentTime = x;
    setCurrentTime(x);
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current!.play();
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="">
        <div className="rounded-full overflow-hidden w-20">
          {/* <NextImage
              className="next-image hover:scale-x-100 hover:cursor-pointer bg-cover"
              src={pic3}
              alt={"image"}
            /> */}
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">{audios[audioIndex].title}</h2>
          <p className="text-sm">{audios[audioIndex].artist}</p>
        </div>
      </div>
      <div className="grow">
        <div className="flex flex-row justify-center gap-3">
          <div>
            <button
              disabled={audios.length === 1}
              className="disabled:text-gray-400"
              onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
            >
              <BackwardIcon className="w-7" />
            </button>
          </div>
          <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
            {isPlay ? (
              <button className="rounded-full right-1">
                <PauseIcon className="w-7" />
              </button>
            ) : (
              <button className="rounded-full">
                <PlayIcon className="w-7" />
              </button>
            )}
          </div>
          <div>
            <button
              disabled={audios.length === 1}
              className="disabled:text-gray-400"
              onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
            >
              <ForwardIcon className="w-7" />
            </button>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setIsPlay(false)}
      />
    </div>
  );
}
