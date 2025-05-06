import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { ProjectCardProps } from "@/app/types/projectCard";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  language,
  repoUrl,
}) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          mt: 2,
          minWidth: 350,
          border: "0.5px solid #003399",
          borderRadius: 2,
          boxShadow: 2,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#003399",
                display: "flex",
                alignItems: "center",
              }}
            >
              {title}
            </Typography>
            <CardActions>
              <IconButton
                component="a"
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <NorthEastIcon />
              </IconButton>
            </CardActions>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <LanguageIcon fontSize="small" />
            <Typography variant="body2">{language}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
