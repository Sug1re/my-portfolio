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
        <Typography sx={{ color: "#39ff14", fontSize: { xs: 10, sm: 20 } }}>
          HR
        </Typography>
        <Typography
          sx={{
            color: "#39ff14",
            fontSize: { xs: 30, sm: 40 },
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          72
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: 1,
        }}
      >
        <Typography sx={{ color: "#ff073a", fontSize: { xs: 10, sm: 20 } }}>
          BP
        </Typography>
        <Typography
          sx={{
            color: "#ff073a",
            fontSize: { xs: 20, sm: 30 },

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          100/80
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 1 }}>
        <Typography sx={{ color: "#00ffff", fontSize: { xs: 10, sm: 20 } }}>
          SpO2
        </Typography>
        <Typography
          sx={{
            color: "#00ffff",
            fontSize: { xs: 30, sm: 40 },

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          100
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 1 }}>
        <Typography sx={{ color: "#ffff33", fontSize: { xs: 10, sm: 20 } }}>
          EtO2
        </Typography>
        <Typography
          sx={{
            color: "#ffff33",
            fontSize: { xs: 30, sm: 40 },

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          40.0
        </Typography>
      </Box>
    </>
  );
};

export default TextData;
