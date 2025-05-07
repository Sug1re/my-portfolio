"use client";

import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import LoopBar from "./LoopBar";
import Waveform from "./Waveform";
import Square from "./Square";
import { waveformPaths } from "@/app/data/waveformPaths";

const ESG = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const lastTriggeredRef = useRef(false);

  const handleLoopUpdate = (x: number) => {
    // 1200px通過で波形切り替え、1回のみ実行
    if (x >= 1195 && x <= 1205) {
      if (!lastTriggeredRef.current) {
        setPathIndex((prev) => (prev + 1) % waveformPaths.length);
        lastTriggeredRef.current = true;
      }
    } else {
      // 範囲外に出たらリセット
      lastTriggeredRef.current = false;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        overflow: "hidden",
        backgroundColor: "black",
        borderRadius: 2,
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 5000 200"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          stroke: "#003399",
          fill: "none",
          strokeWidth: 3,
        }}
      >
        <Square />
        <Waveform path={waveformPaths[pathIndex]} />
      </svg>
      <LoopBar onUpdate={handleLoopUpdate} />
    </Box>
  );
};

export default ESG;
