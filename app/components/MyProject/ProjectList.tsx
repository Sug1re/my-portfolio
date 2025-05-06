import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

const ProjectList = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectList;
