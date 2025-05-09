import { Box } from "@mui/material";
import React from "react";
import TextData from "./TextData";

const Monitor = () => {
  return (
    <>
      <Box
        sx={{
          width: 160,
          height: 200,
          backgroundColor: "black",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          position: "relative",
        }}
      >
        <TextData />
      </Box>
    </>
  );
};

export default Monitor;
