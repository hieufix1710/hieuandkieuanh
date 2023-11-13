import React from "react";

export default function HoldInfo() {
  const info = {
    coupleName: "Văn Hiếu & Kiều Anh",
    addressFull: "Nhà Văn Hoá Thôn Xuân Lai, Mai Thuỷ, Lệ Thuỷ, Quảng Bình",
    datetimeDetails: "2023.11.18 - 10:30AM",
  };

  return (
    <div className="bg-gray-100 px-2 md:px-4 lg:px-8 flex flex-col gap-4 pb-8">
      <div className="flex flex-row justify-center text-center py-8 text-3xl">
        <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>
          Thông tin buổi lễ
        </h1>
      </div>
      <div className="w-full text-center text-red-600">
        <p
          className="h2 mt-5 ww-title"
          style={{ fontFamily: "Noto Serif KR, serif", fontSize: "1.0em" }}
        >
          <b style={{ fontSize: "1.4em" }}>{info.datetimeDetails}</b>
          <br />
          {info.addressFull}
        </p>
      </div>
      <div className="flex flex-row justify-center text-center py-8 text-3xl">
        <h1 style={{ fontFamily: "Noto Serif KR, serif" }}>Địa điểm tổ chức</h1>
      </div>
      <div>
        <iframe
          title="map"
          style={{
            border: 0,
            width: "100%",
            height: "50vh",
          }}
          src={`https://maps.google.com/maps?api=1&q=17.191125958273513, 106.78727741927658&z=15&output=embed`}
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}
