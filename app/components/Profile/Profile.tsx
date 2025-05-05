"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Box, Card, Typography } from "@mui/material";
import ProfileData from "./ProfileData";

const Profile = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            ml: 1,
            borderBottom: "1.5px solid #003399",
          }}
        >
          Profile
        </Typography>
      </Box>

      {usePathname() === "/pages/profile" && (
        <Card sx={{ mt: 2, pb: 2, border: "0.5px solid #003399" }}>
          <ProfileData />
        </Card>
      )}

      {usePathname() === "/" && <ProfileData />}
    </>
  );
};

export default Profile;
