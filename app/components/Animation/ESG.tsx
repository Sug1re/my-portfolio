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

  const svgWidthPx = 800; // ESGのBoxの実幅
  const viewBoxWidth = 5000; // SVGのviewBox幅

  const convertPxToViewBox = (px: number) => (px / svgWidthPx) * viewBoxWidth;

  const handleLoopUpdate = (x: number) => {
    const viewBoxX = convertPxToViewBox(x);

    if (viewBoxX >= 4800 && viewBoxX <= 5000) {
      if (!lastTriggeredRef.current) {
        setPathIndex((prev) => (prev + 1) % waveformPaths.length);
        lastTriggeredRef.current = true;
      }
    } else {
      lastTriggeredRef.current = false;
    }
  };

  return (
    <Box
      sx={{
        width: 800,
        height: 200,
        // overflow: "hidden",
        backgroundColor: "black",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 5000 200"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 40,
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
