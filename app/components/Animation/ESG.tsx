"use client";

import React from "react";
import { Box } from "@mui/material";
import LoopBar from "./LoopBar";
import Square from "./Square";

const ESG = () => {
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
      </svg>
      <LoopBar />
    </Box>
  );
};

export default ESG;
