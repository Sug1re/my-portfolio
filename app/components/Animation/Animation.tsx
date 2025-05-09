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
          mt: 10,
          width: "full",
          height: 300,
          backgroundColor: "#000000",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <ESG />
        <Monitor />
      </Box>
    </>
  );
};

export default Animation;
