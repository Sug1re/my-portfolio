"use client";

import { hrData, bpData, spo2Data, eto2Data } from "@/app/data/vitalsData";
import { Vitals } from "@/app/types/vitals";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const getRandomValue = <T,>(arr: T[]): T => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const TextData: React.FC = () => {
  const [currentVitals, setCurrentVitals] = useState<Vitals | null>(null);

  useEffect(() => {
    const updateVitals = () => {
      setCurrentVitals({
        hr: getRandomValue(hrData),
        bp: getRandomValue(bpData),
        spo2: getRandomValue(spo2Data),
        eto2: getRandomValue(eto2Data),
      });
    };

    updateVitals(); // 初回
    const interval = setInterval(updateVitals, 1800);

    return () => clearInterval(interval);
  }, []);

  if (!currentVitals) {
    // 初期ロード時のプレースホルダー表示（任意）
    return (
      <>
        <Typography>...</Typography>
      </>
    );
  }

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
          {currentVitals.hr}
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
          {currentVitals.bp}
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
          {currentVitals.spo2}
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
          {currentVitals.eto2}
        </Typography>
      </Box>
    </>
  );
};

export default TextData;
