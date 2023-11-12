import React, { useState, useEffect } from "react";

const WeddingWishes = ({
  wishes,
}: {
  wishes: { message: string; author: string }[];
}) => {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const container = document.getElementById("wishes-container");
    const wrapper = document.getElementById("wishes-wrapper");

    const scrollWidth = wrapper!.scrollWidth;
    const containerWidth = container!.clientWidth;

    const handleScroll = () => {
      if (wrapper!.scrollLeft === scrollWidth - containerWidth) {
        // If we've reached the end of the wishes, stop scrolling
        setScrolling(false);
      }
    };

    // Attach scroll event listener
    wrapper!.addEventListener("scroll", handleScroll);

    // Cleanup when the component unmounts
    return () => {
      wrapper!.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wishes-container" id="wishes-container">
      <div
        className={`wishes-wrapper ${scrolling ? "scrolling" : "paused"}`}
        id="wishes-wrapper"
      >
        {wishes.map((wish: any, index: number) => (
          <div key={index} className="wish">
            {wish.author_name}: {wish.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingWishes;
