import React from "react";
import MainBackground from "../../public/images/main-background.jpg";
import Image from "next/image";
export default function Main() {
  const info = {
    coupleName: "Văn Hiếu & Kiều Anh",
    addressFull: "Nhà Văn Hoá Thôn Xuân Lai, Mai Thuỷ, Lệ Thuỷ, Quảng Bình",
    datetimeDetails: "2023.11.18 - 10:30AM",
  };

  return (
    <div id="home" className="h-screen w-full relative">
      <div
        style={{ background: "rgba(245, 138, 119, 0.2)" }}
        className="w-full h-full absolute"
      ></div>
      <Image
        src={MainBackground}
        alt="main_image"
        className="h-full max-w-full object-cover"
      />
      <div className="absolute top-2/4 left-1 right-1 lg:left-1/4 lg:right-1/4 text-white text-center">
        <p
          className="text-[32px] md:text-[64px]"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          {info.coupleName}
        </p>
        <p
          className=""
          style={{ fontFamily: "Gugi, cursive", fontSize: "1em" }}
        >
          | WE ARE GETTING MARRIED |
        </p>
        <p
          className="h2 mt-5 ww-title"
          style={{ fontFamily: "Noto Serif KR, serif", fontSize: "1.0em" }}
        >
          <b style={{ fontSize: "1.4em" }}>{info.datetimeDetails}</b>
          <br />
          {info.addressFull}
        </p>
      </div>
    </div>
  );
}
