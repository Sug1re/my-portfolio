import { Box, Container } from "@mui/material";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import MyProject from "./components/MyProject/MyProject";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ mt: 10 }}>
          <Profile />
          <MyProject />
        </Box>
      </Container>
    </>
  );
}
