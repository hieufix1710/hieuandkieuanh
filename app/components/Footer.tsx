import React from "react";

export default function Footer() {
  return (
    <div>
      <audio controls autoPlay>
        <source src="/mus.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
