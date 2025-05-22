import React from "react";
import { Grid } from "@mui/material";
import SkillCard from "./SkillCard";
import { skills } from "@/app/data/skills";
import MotionBoxWrapper from "../Common/MotionBox";

const SkillList = () => {
  return (
    <>
      <MotionBoxWrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Grid
          container
          spacing={2}
          columns={{ sm: 4, md: 6 }}
          justifyContent="center"
        >
          {skills.map((skill, index) => (
            <Grid key={index} size={2}>
              <SkillCard {...skill} />
            </Grid>
          ))}
        </Grid>
      </MotionBoxWrapper>
    </>
  );
};

export default SkillList;
