import { Box, Typography } from "@mui/material";
import React from "react";

const MoreProfile = () => {
  return (
    <>
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
    </>
  );
};

export default MoreProfile;
