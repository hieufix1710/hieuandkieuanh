import React, { useEffect, useState } from "react";
let navigator: any;

export default function Map() {
  const [position, setPosition] = useState<GeolocationCoordinates>();

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setPosition(position.coords);
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
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
