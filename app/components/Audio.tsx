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
    <div className="sticky bottom-0 h-10 p-2 left-0 right-0">
      <div className="flex flex-row justify-between">
        <div className="">
          <NextImage
            className="next-image w-20 rounded-full hover:scale-x-100 hover:cursor-pointer"
            src={pic3}
            alt={"image"}
          />
          <h2 className="font-bold">{audios[audioIndex].title}</h2>
          <p className="text-sm">{audios[audioIndex].artist}</p>
          <div className="flex flex-row justify-between py-1">
            <button
              disabled={audios.length === 1}
              className="disabled:text-gray-400"
              onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
            >
              <BackwardIcon className="w-5" />
            </button>
            <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
              {isPlay ? (
                <button className="rounded-full right-1">
                  <PauseIcon className="w-5" />
                </button>
              ) : (
                <button className="rounded-full">
                  <PlayIcon className="w-5" />
                </button>
              )}
            </div>
            <button
              disabled={audios.length === 1}
              className="disabled:text-gray-400"
              onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
            >
              <ForwardIcon className="w-5" />
            </button>
          </div>
          <audio
            ref={audioRef}
            src={audios[audioIndex].src}
            onLoadedData={handleLoadedData}
            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            onEnded={() => setIsPlay(false)}
          />
        </div>
        <div>
          <ArrowSmallUpIcon
            className="w-7 cursor-pointer"
            onClick={() => scrollTop()}
          />
        </div>
      </div>
    </div>
  );
}
