"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import LoopBar from "./LoopBar";
import Waveform from "./Waveform";
import Square from "./Square";
import { waveformPaths } from "@/app/data/waveformPaths";

const NUM_SEGMENTS = 10;
const SEGMENT_DURATION = 2000;

const ESG = () => {
  const [waveformSegments, setWaveformSegments] = useState<string[]>(() =>
    Array.from({ length: NUM_SEGMENTS }, (_, i) => waveformPaths(i))
  );

  const segmentIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = segmentIndexRef.current;

      setWaveformSegments((prev) => {
        const newSegments = [...prev];
        newSegments[i] = waveformPaths(i);
        return newSegments;
      });

      segmentIndexRef.current = (i + 1) % NUM_SEGMENTS;
    }, SEGMENT_DURATION);

    return () => clearInterval(interval);
  }, []);

  const handleLoopUpdate = (x: number) => {
    const segmentWidthPx = 800 / NUM_SEGMENTS; // 80px
    const segmentIndex = Math.floor(x / segmentWidthPx);

    if (segmentIndex !== segmentIndexRef.current) {
      segmentIndexRef.current = segmentIndex;

      setWaveformSegments((prev) => {
        const newSegments = [...prev];
        newSegments[segmentIndex] = waveformPaths(segmentIndex);
        return newSegments;
      });
    }
  };

  return (
    <Box
      sx={{
        width: 800,
        height: 200,
        backgroundColor: "black",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
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
        <Waveform segments={waveformSegments} />
      </svg>
      <LoopBar onUpdate={handleLoopUpdate} />
    </Box>
  );
};

export default ESG;
