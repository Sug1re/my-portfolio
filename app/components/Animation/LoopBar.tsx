"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const MotionBox = motion(Box);

type Props = {
  onUpdate: (x: number) => void;
};

const LoopBar = ({ onUpdate }: Props) => {
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    onUpdate(x.get()); // 現在のX位置をESGに通知
  });

  useEffect(() => {
    x.set(0); // 初期位置リセット
  }, [x]);

  return (
    <MotionBox
      sx={{
        width: 20,
        height: 200,
        backgroundColor: "#000000",
        borderRadius: 2,
        position: "absolute",
        left: 0,
      }}
      animate={{ x: [0, 2400] }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{ x }}
    />
  );
};

export default LoopBar;
