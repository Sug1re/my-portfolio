import { Box, Typography } from "@mui/material";
import React from "react";

const TextData = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: 1,
        }}
      >
        <Typography sx={{ color: "#39ff14" }}>HR</Typography>
        <Typography sx={{ color: "#39ff14" }}>72</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: 1,
        }}
      >
        <Typography sx={{ color: "#ff073a" }}>BP</Typography>
        <Typography sx={{ color: "#ff073a" }}>100/80</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 1 }}>
        <Typography sx={{ color: "#00ffff" }}>SpO2</Typography>
        <Typography sx={{ color: "#00ffff" }}>100</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 1 }}>
        <Typography sx={{ color: "#ffff33" }}>EtO2</Typography>
        <Typography sx={{ color: "#ffff33" }}>40.0</Typography>
      </Box>
    </>
  );
};

export default TextData;
