"use client";

import React from "react";
import { Box } from "@mui/material";
import LoopBar from "./LoopBar";
import Square from "./Square";
import Waveform from "./Waveform";
import { waveformPaths } from "@/app/data/waveformPaths";

const ESG = () => {
  // セグメント数（波形の個数）を必要に応じて調整
  const segments = Array.from({ length: 7 }, (_, i) => waveformPaths(i));
  return (
    <Box sx={{ width: "75%", height: "100%" }}>
      <svg
        viewBox="0 0 2000 200"
        preserveAspectRatio="none"
        style={{
          strokeWidth: 2,
          stroke: "#003399",
          fill: "none",
          width: "70%",
          height: "100%",
          position: "absolute",
          top: "0%",
          left: "5%",
        }}
      >
        <Square />

        <Waveform segments={segments} />
      </svg>
      <LoopBar />
    </Box>
  );
};

export default ESG;
