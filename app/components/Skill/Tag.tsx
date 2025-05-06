import { Card } from "@mui/material";
import React from "react";
import { TagProps } from "@/app/types/tag";

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          px: 1,
          color: "#fff",
          bgcolor: " #99ccff",
          border: "0.5px solid #99ccff",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        # {tag}
      </Card>
    </>
  );
};

export default Tag;
