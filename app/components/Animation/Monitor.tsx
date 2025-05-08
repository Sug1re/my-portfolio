import { Box } from "@mui/material";
import React from "react";
import TextData from "./TextData";

const Monitor = () => {
  return (
    <>
      <Box
        sx={{
          width: "160px",
          height: 200,
          backgroundColor: "black",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          position: "relative",
        }}
      >
        <TextData />
      </Box>
    </>
  );
};

export default Monitor;
