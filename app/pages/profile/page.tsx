import React from "react";
import { Box, Container } from "@mui/material";
import Header from "@/app/components/Header/Header";
import Profile from "@/app/components/Profile/Profile";
import SelfIntroduction from "@/app/components/Profile/SelfIntroduction";
import Career from "@/app/components/Profile/Career";

const ProfilePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ mt: 10 }}>
          <Profile />
          <SelfIntroduction />
          <Career />
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
