import { Box, Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import Tag2 from "./Tag2";
import Level from "./Level";
import { SkillCardProps } from "@/app/types/skillCard";

const SkillCard: React.FC<SkillCardProps> = ({
  src,
  alt,
  width,
  height,
  tag,
  tag2,
  level,
}) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          mt: 2,
          minWidth: 200,
          border: "0.5px solid #003399",
          borderRadius: 2,
          boxShadow: 2,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box sx={{ display: "flex", p: 1 }}>
          <Image src={src} alt={alt} width={width} height={height} />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2, gap: 1 }}>
            <Level level={level} />
            <Tag tag={tag} />
            <Tag2 tag2={tag2} />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SkillCard;
