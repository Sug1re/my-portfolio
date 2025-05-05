import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "PokemonSleep_HelpSpeed",
    description: "PokémonSleepのアプリ",
    language: "TypeScript",
    repoUrl: "https://github.com/Sug1re/PokemonSleep_HelpSpeed",
  },
  {
    title: "correspondence-app",
    description: "通信制高校サーチアプリ",
    language: "TypeScript",
    repoUrl: "https://github.com/Sug1re/correspondence-app",
  },
  {
    title: "anime-website",
    description: "アニメ公式サイト",
    language: "TypeScript",
    repoUrl: "https://github.com/Sug1re/anime-website",
  },
  {
    title: "my-portfolio",
    description: "ポートフォリオ",
    language: "TypeScript",
    repoUrl: "https://github.com/Sug1re/my-portfolio",
  },

  // 他のプロジェクトを追加
];

const ProjectList = () => {
  return (
    <Grid container spacing={2} columns={{ sm: 2, md: 4 }}>
      {projects.map((project, index) => (
        <Grid key={index} size={2}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
