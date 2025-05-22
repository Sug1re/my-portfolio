"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LoopBar from "./LoopBar";
import Square from "./Square";
import Waveform from "./Waveform";
import { waveformPaths } from "@/app/data/waveformPaths";

const ESG = () => {
  const [segments, setSegments] = useState<string[]>([]);

  useEffect(() => {
    const SEGMENT_LENGTH = 8;
    const INTERVAL_DELAY = 1400; // 1.4秒後に更新

    // 初期の全体波形生成
    const generated = Array.from({ length: SEGMENT_LENGTH }, (_, i) =>
      waveformPaths(i)
    );
    setSegments(generated);

    let currentIndex = 1; // 最初に更新するのは segments[1]
    let isMounted = true;

    const updateNextSegment = () => {
      if (!isMounted) return;

      setSegments((prev) => {
        const updated = [...prev];
        updated[currentIndex] = waveformPaths(currentIndex); // ランダム更新
        return updated;
      });

      // 次のインデックスを計算
      currentIndex = (currentIndex + 1) % SEGMENT_LENGTH;

      // 次の更新を2.5秒後に予約
      setTimeout(updateNextSegment, INTERVAL_DELAY);
    };

    // 最初の呼び出し
    setTimeout(updateNextSegment, 2600); // 最初の更新は2.6秒後

    return () => {
      isMounted = false; // クリーンアップ
    };
  }, []);

  return (
    <Box sx={{ width: "75%", height: "100%" }}>
      <svg
        viewBox="0 0 2080 200"
        preserveAspectRatio="none"
        style={{
          strokeWidth: 2,
          stroke: "#003399",
          fill: "none",
          width: "70%",
          height: "100%",
          position: "absolute",
          top: "0%",
          left: "5%",
        }}
      >
        <Square />
        <Waveform segments={segments} />
      </svg>
      <LoopBar />
    </Box>
  );
};

export default ESG;
