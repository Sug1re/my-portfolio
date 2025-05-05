"use client";

import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useGitHubAvatar } from "../../hooks/useAvatar";
import Button from "./Button";
import { usePathname } from "next/navigation";

const GITHUB_USERNAME = "Sug1re"; // あなたのGitHubユーザー名に変更

const styles = {
  name: {
    fontWeight: 600,
    fontSize: 25,
    color: "#003399",
  },
  sectionTitle: {
    fontWeight: 600,
    fontSize: 20,
    color: "#3366cc",
  },
  sectionText: {
    fontWeight: 500,
    fontSize: 15,
    color: "#3366cc",
  },
};

const ProfileData = () => {
  const avatarUrl = useGitHubAvatar(GITHUB_USERNAME);
  const pathname = usePathname();

  return (
    <>
      <Box
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {avatarUrl && (
          <Avatar
            src={avatarUrl}
            alt="GitHub Avatar"
            sx={{
              width: 160,
              height: 160,
              border: "2px solid #003399",
              mt: 2,
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography sx={styles.name}>Sug1re / 杉山 大地</Typography>
          <Typography sx={styles.sectionText}>見習いエンジニア</Typography>

          <Typography sx={styles.sectionTitle}>所属</Typography>
          <Typography sx={styles.sectionText}>
            学校法人角川ドワンゴ学園S高等学校
          </Typography>

          <Typography sx={styles.sectionTitle}>趣味</Typography>
          <Typography sx={styles.sectionText}>
            プログラミング・アニメ鑑賞
          </Typography>
        </Box>

        {/* ルートパス "/" のときだけ表示 */}
        {pathname === "/" && (
          <Box sx={{ mt: 2 }}>
            <Button />
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProfileData;
