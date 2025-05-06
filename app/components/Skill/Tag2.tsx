import { Card } from "@mui/material";
import React from "react";
import { Tag2Props } from "@/app/types/tag2";

const Tag2: React.FC<Tag2Props> = ({ tag2 }) => {
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
        # {tag2}
      </Card>
    </>
  );
};

export default Tag2;
