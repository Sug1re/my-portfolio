import { Box, Typography } from "@mui/material";
import React from "react";

const TextData = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: 4,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: 1,
            mb: 2,
          }}
        >
          <Typography sx={{ color: "#39ff14", fontSize: 10 }}>HR</Typography>
          <Typography sx={{ color: "#39ff14", fontSize: 40 }}>72</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: 1,
            mb: 2,
          }}
        >
          <Typography sx={{ color: "#ff073a", fontSize: 10 }}>BP</Typography>
          <Typography sx={{ color: "#ff073a", fontSize: 25 }}>
            100/80
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mx: 1 }}>
          <Typography sx={{ color: "#00ffff", fontSize: 10 }}>SpO2</Typography>
          <Typography sx={{ color: "#00ffff", fontSize: 40 }}>100</Typography>
        </Box>
      </Box>
    </>
  );
};

export default TextData;
