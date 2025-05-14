"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MoreProfile = () => {
  return (
    <>
      <MotionBox
        initial={{ y: 28, opacity: 0 }} //初期状態：に下16px、透明
        whileInView={{ y: 0, opacity: 1 }} //アニメーション後：元の位置、完全に表示
        transition={{
          duration: 1,
          delay: 0.75,
          ease: [0.87, 0.6, 0.2, 1],
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              ml: 1,
              mt: 8,
              borderBottom: "1.5px solid #003399",
            }}
          >
            Self-Introduction
          </Typography>
        </Box>

        <Typography
          sx={{
            display: "flex-start",
            alignItems: "center",
            mt: 2,
            ml: 2,
          }}
        >
          趣味でプログラミングをしているものです。
          <br />
          全日制の高校を中退して通信制の高校に通っています。
          <br />
          英語でフィンランド語を勉強しています。（英語は苦手）
        </Typography>
      </MotionBox>
    </>
  );
};

export default MoreProfile;
