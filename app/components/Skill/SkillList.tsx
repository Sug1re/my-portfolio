import { Grid } from "@mui/material";
import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/app/data/skills";

const SkillList = () => {
  return (
    <>
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
    </>
  );
};

export default SkillList;
