import NextImage from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import CONG4247 from "../../public/images/gallery/CONG4247.jpg";
import CONG4373 from "../../public/images/gallery/CONG4373.jpg";
import CONG4388 from "../../public/images/gallery/CONG4388.jpg";
import CONG4390 from "../../public/images/gallery/CONG4390.jpg";
import CONG4415 from "../../public/images/gallery/CONG4415.jpg";
import CONG4426 from "../../public/images/gallery/CONG4426.jpg";
import CONG4428 from "../../public/images/gallery/CONG4428.jpg";
import CONG4433 from "../../public/images/gallery/CONG4433.jpg";
import CONG4435 from "../../public/images/gallery/CONG4435.jpg";
import CONG4453 from "../../public/images/gallery/CONG4453.jpg";
import CONG4492 from "../../public/images/gallery/CONG4492.jpg";
import CONG4513 from "../../public/images/gallery/CONG4513.jpg";
import CONG4522 from "../../public/images/gallery/CONG4522.jpg";
import CONG4530 from "../../public/images/gallery/CONG4530.jpg";
import CONG4584 from "../../public/images/gallery/CONG4584.jpg";
import CONG4595 from "../../public/images/gallery/CONG4595.jpg";
import CONG4620 from "../../public/images/gallery/CONG4620.jpg";
import pic1 from "../../public/images/gallery/pic1.jpg";
import pic2 from "../../public/images/gallery/pic2.jpg";
import pic3 from "../../public/images/gallery/pic3.jpg";

const dataImages: any[] = [
  CONG4247,
  CONG4373,
  CONG4388,
  CONG4390,
  CONG4415,
  CONG4426,
  CONG4428,
  CONG4433,
  CONG4435,
  CONG4453,
  CONG4492,
  CONG4513,
  CONG4522,
  CONG4530,
  CONG4584,
  CONG4595,
  CONG4620,
  pic1,
  pic2,
  pic3,
];

const fetchImages = async (data: any[]) => {
  const imagesPromise = data.slice(0, 10).map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          src,
        });
      img.onerror = (error: any) => reject(error);
    });
  });

  const images = await Promise.all(imagesPromise);

  return images;
};

export default function Gallery() {
  const [data, setData] = useState(dataImages);

  // useEffect(() => {
  //   fetchImages(data).then((iag))
  // }, [])

  const breakpointColumnsObj = {
    default: 2,
    500: 1,
  };

  return (
    <div id="gallery" className="py-2">
      <div className="flex flex-row justify-center text-center py-8 text-3xl">
        <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>Gallery</h1>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
      >
        {data.map((image: any, i: number) => {
          return (
            <NextImage
              key={i}
              className="next-image hover:scale-x-100 hover:cursor-pointer"
              src={image}
              alt={"iamge"}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
