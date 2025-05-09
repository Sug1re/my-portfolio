import { Box, Container } from "@mui/material";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import MyProject from "./components/MyProject/MyProject";
import Skill from "./components/Skill/Skill";
import Animation from "./components/Animation/Animation";

export default function Home() {
  return (
    <>
      <Header />

      <Animation />

      <Container maxWidth="lg">
        <Box sx={{ my: 10 }}>
          <Profile />
          <MyProject />
          <Skill />
        </Box>
      </Container>
    </>
  );
}
