import React from "react";
import Menu from "./Menu";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      {/* farmer motionで無限に見てられるアニメーションを作成 */}
      {/* ↑ここじゃない */}
      <AppBar>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography sx={{ fontWeight: 600, ml: 1, color: "#000000" }}>
            Sug1re.tsx
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Menu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
