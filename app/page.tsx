import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Profile />
      </Container>
    </>
  );
}
