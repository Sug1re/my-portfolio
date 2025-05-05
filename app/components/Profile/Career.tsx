import { Box, Typography } from "@mui/material";
import React from "react";

const experiences = [
  {
    year: "2007/05/10",
    title: "誕生",
  },
  {
    year: "2023/04 - 2023/06",
    title: "新潟江南高校 - 普通科 - 中退",
  },
  {
    year: "2023/08 - 現在",
    title: "S高等学校 - 通学コース",
  },
  {
    year: "2024/12 - 現在",
    title: "株式会社スーパーハムスター - 見習いアルバイト",
  },
];

const Career = () => {
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
          Career
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          mt: 2,
          ml: 2,
          pl: 6,
          borderLeft: "6px solid #003399",
        }}
      >
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ position: "relative", pb: 4 }}>
            <Box
              sx={{
                position: "absolute",
                left: -63,
                top: 4,
                width: 24,
                height: 24,
                backgroundColor: "#003399",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{exp.year}</Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                {exp.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Career;
