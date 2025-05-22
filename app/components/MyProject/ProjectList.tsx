import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";
import MotionBoxWrapper from "../Common/MotionBox";

const ProjectList = () => {
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
          columns={{ sm: 2, md: 4 }}
          justifyContent="center"
        >
          {projects.map((project, index) => (
            <Grid key={index} size={2}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </MotionBoxWrapper>
    </>
  );
};

export default ProjectList;
