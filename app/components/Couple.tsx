import React from "react";
import Chure from "../../public/images/chure.png";
import CoDau from "../../public/images/codau.jpg";
import Image from "next/image";

export default function Couple() {
  return (
    <div id="couple">
      <div className="flex flex-row justify-center text-center py-8 text-3xl">
        <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>Chú rể & Cô dâu</h1>
      </div>
      <div className="grid grid-cols-2 gap-1 md:gap-5 my-3">
        <div className="col-span-1 text-center">
          <div>
            <h2
              className="py-2 text-xl text-red-600"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Nguyễn Văn Hiếu
            </h2>
            <Image
              src={Chure}
              alt="main_image"
              className="h-full max-w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 text-center">
          <div>
            <h2
              className="py-2 text-xl text-red-600"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Lương Kiều Anh
            </h2>
            <Image
              src={CoDau}
              alt="main_image"
              className="h-full max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
