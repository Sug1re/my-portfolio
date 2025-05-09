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
  // const [waveformSegments, setWaveformSegments] = useState<string[]>(() =>
  //   Array.from({ length: NUM_SEGMENTS }, (_, i) => waveformPaths(i))
  // );

  // const segmentIndexRef = useRef(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const i = segmentIndexRef.current;

  //     setWaveformSegments((prev) => {
  //       const newSegments = [...prev];
  //       newSegments[i] = waveformPaths(i);
  //       return newSegments;
  //     });

  //     segmentIndexRef.current = (i + 1) % NUM_SEGMENTS;
  //   }, SEGMENT_DURATION);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Box sx={{ width: "80%", height: "100%" }}>
      <svg
        viewBox="0 0 5000 200"
        preserveAspectRatio="none"
        style={{
          strokeWidth: 3,
          stroke: "#003399",
          width: "75%",
          height: "100%",
          position: "absolute",
          top: "0%",
          left: "5%",
          fill: "none",
        }}
      >
        <Square />
        {/* <Waveform segments={waveformSegments} /> */}
      </svg>
      <LoopBar />
    </Box>
  );
};

export default ESG;
