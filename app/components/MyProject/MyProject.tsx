import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectList from "./ProjectList";

const MyProject = () => {
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
          Project
        </Typography>
      </Box>

      <ProjectList />
    </>
  );
};

export default MyProject;
