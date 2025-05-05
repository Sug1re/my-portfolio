"use client";

import React from "react";
import { Avatar } from "@mui/material";
import { useGitHubAvatar } from "../../hooks/useAvatar";

const GITHUB_USERNAME = "Sug1re"; // あなたのGitHubユーザー名に変更

const Profile = () => {
  const avatarUrl = useGitHubAvatar(GITHUB_USERNAME);

  return (
    <>
      {avatarUrl && (
        <Avatar
          src={avatarUrl}
          alt="GitHub Avatar"
          sx={{ width: 80, height: 80, mt: 2 }}
        />
      )}
    </>
  );
};

export default Profile;
