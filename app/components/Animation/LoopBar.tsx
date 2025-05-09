import { motion } from "framer-motion";
import { Box } from "@mui/material";
import React from "react";

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
      animate={{ left: ["0%", "75%"] }}
      transition={{
        duration: 8,
        ease: "linear", // 等速
        repeat: Infinity, // 無限ループ
      }}
    />
  );
};

export default LoopBar;
