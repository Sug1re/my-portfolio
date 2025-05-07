import { Box, Container } from "@mui/material";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import MyProject from "./components/MyProject/MyProject";
import Skill from "./components/Skill/Skill";
import Animation from "./components/Animation/Animation";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ my: 10 }}>
          <Animation />
          <Profile />
          <MyProject />
          <Skill />
        </Box>
      </Container>
    </>
  );
}
