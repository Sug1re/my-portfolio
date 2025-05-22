"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const MotionBox = motion(Box);

const LoopBar = () => {
  return (
    <MotionBox
      sx={{
        width: "5%",
        height: "100%",
        backgroundColor: "#000000",
        borderRadius: 2,
        position: "absolute",
        left: 0,
      }}
      animate={{ left: ["0%", "70%"] }}
      transition={{
        duration: 11.2,
        ease: "linear", // 等速
        repeat: Infinity, // 無限ループ
      }}
    />
  );
};

export default LoopBar;
