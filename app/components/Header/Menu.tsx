"use client";

import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { contacts } from "@/app/data/contacts";
import { pages } from "@/app/data/pages";
import Image from "next/image";

type Anchor = "right";

const Menu = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ borderLeft: "2px solid #003399", height: "100vh", pl: 1 }}
    >
      <List sx={{ width: 200 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              ml: 1,
              mb: 2,
              borderBottom: "1.5px solid #003399",
            }}
          >
            Page
          </Typography>
        </Box>

        {pages.map((page, index) => (
          <ListItem key={index} disablePadding sx={{ width: "100%" }}>
            <a
              href={page.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reset-link"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Image
                    src={page.src}
                    alt={page.alt}
                    width={page.width}
                    height={page.height}
                  />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>{page.name}</Typography>
                </Box>
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List sx={{ width: 200 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              ml: 1,
              mb: 2,
              borderBottom: "1.5px solid #003399",
            }}
          >
            Contact
          </Typography>
        </Box>
        {contacts.map((contact, index) => (
          <ListItem key={index} disablePadding sx={{ width: "100%" }}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reset-link"
            >
              <ListItemButton>
                <ListItemIcon>
                  <Image
                    src={contact.src}
                    alt={contact.alt}
                    width={contact.width}
                    height={contact.height}
                  />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: "#003399" }}>
                    {contact.name}
                  </Typography>

                  <Typography sx={{ fontWeight: 600 }}>{contact.id}</Typography>
                </Box>
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <Button
          onClick={toggleDrawer("right", true)}
          sx={{
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <DehazeIcon fontSize="medium" sx={{ mr: 1, color: "#000000" }} />
        </Button>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Box>
    </>
  );
};

export default Menu;
