import { Box } from "@mui/material";
import React from "react";
import TextData from "./TextData";

const Monitor = () => {
  return (
    <>
      <Box
        sx={{
          width: "20%",
          height: "100%",
          backgroundColor: "black",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <TextData />
      </Box>
    </>
  );
};

export default Monitor;
