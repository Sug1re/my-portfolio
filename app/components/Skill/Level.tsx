"use client";

import React from "react";
import { Box, Rating } from "@mui/material";
import { LevelProps } from "@/app/types/level";

const Level: React.FC<LevelProps> = ({ level }) => {
  return (
    <>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating name="read-only" value={level} readOnly />
      </Box>
    </>
  );
};

export default Level;
