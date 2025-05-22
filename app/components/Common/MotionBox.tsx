"use client";

import React from "react";
import { Box, BoxProps, styled } from "@mui/material";
import { motion, MotionProps } from "framer-motion";

// styled + motion で型の衝突を回避
const MotionBox = motion(styled(Box)({}));

type Props = BoxProps &
  MotionProps & {
    children: React.ReactNode;
  };

const MotionBoxWrapper = ({ children, ...props }: Props) => {
  return <MotionBox {...props}>{children}</MotionBox>;
};

export default MotionBoxWrapper;
