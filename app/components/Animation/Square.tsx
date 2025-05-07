import React from "react";

const Square = () => {
  return (
    <>
      {/* グリッド線：縦線（every 20px） */}
      {[...Array(4000)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 10}
          y1={0}
          x2={i * 10}
          y2={200}
          stroke="rgba(231, 231, 231, 0.15)"
          strokeWidth={0.5}
        />
      ))}
      {/* グリッド線：横線（every 20px） */}
      {[...Array(20)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * 10}
          x2={5000}
          y2={i * 10}
          stroke="rgba(231, 231, 231, 0.15)"
          strokeWidth={0.5}
        />
      ))}
    </>
  );
};

export default Square;
