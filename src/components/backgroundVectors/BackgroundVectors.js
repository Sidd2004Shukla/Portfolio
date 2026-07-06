import React from "react";
import vector1 from "../../assets/images/vector1.png";
import vector2 from "../../assets/images/vector2.png";
import vector3 from "../../assets/images/vector3.png";

export default function BackgroundVectors() {
  const vectors = [vector1, vector2, vector3];

  const placements = [
    { top: "22%", left: "2%", size: "220px", rotate: "15deg", opacity: 0.14 },
    { top: "28%", right: "2%", size: "260px", rotate: "45deg", opacity: 0.12 },
    { top: "35%", left: "78%", size: "240px", rotate: "115deg", opacity: 0.13 },
    { top: "42%", left: "1%", size: "280px", rotate: "85deg", opacity: 0.13 },
    { top: "50%", right: "3%", size: "230px", rotate: "210deg", opacity: 0.13 },
    { top: "58%", left: "5%", size: "250px", rotate: "135deg", opacity: 0.12 },
    { top: "66%", right: "2%", size: "260px", rotate: "295deg", opacity: 0.14 },
    { top: "74%", left: "80%", size: "290px", rotate: "65deg", opacity: 0.11 },
    { top: "82%", left: "1%", size: "220px", rotate: "180deg", opacity: 0.13 },
    { top: "90%", right: "6%", size: "240px", rotate: "340deg", opacity: 0.12 }
  ];

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden"
    }}>
      {placements.map((pos, index) => {
        const src = vectors[index % vectors.length];
        return (
          <img
            key={index}
            src={src}
            alt=""
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              right: pos.right,
              width: pos.size,
              height: "auto",
              transform: `rotate(${pos.rotate})`,
              opacity: pos.opacity,
              zIndex: 0,
              pointerEvents: "none"
            }}
          />
        );
      })}
    </div>
  );
}
