"use client"; // Next.jsのApp Routerを使っている場合は必要

import { Card } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("pages/profile");
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        color: "#3366cc",
        border: "0.5px solid #003399",
        px: 2,
        py: 1,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      よく見る
    </Card>
  );
};

export default Button;
