"use client";

import React from "react";
import Menu from "./Menu";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <AppBar>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Button
            onClick={handleClick}
            sx={{
              textTransform: "none",
              backgroundColor: "transparent",
              ":hover": {
                backgroundColor: "transparent",
              },
              boxShadow: "none",
            }}
          >
            <Typography sx={{ fontWeight: 600, ml: 1, color: "#000000" }}>
              Sug1re.tsx
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Menu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
