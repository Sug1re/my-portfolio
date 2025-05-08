import React from "react";
import { Box } from "@mui/material";
import ESG from "./ESG";
import Monitor from "./Monitor";

const Animation = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ESG />
        <Monitor />
      </Box>
    </>
  );
};

export default Animation;
