import { Box, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
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
        Skills
      </Typography>
    </Box>
  );
};

export default Skills;
