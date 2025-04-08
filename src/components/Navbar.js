import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home,
  List,
  Forward,
  Info,
} from "@mui/icons-material";
import React, { useState } from "react";
import BorderButton from "./BorderButton";

const styles = {
  container: {
    p: 0,
  },
  title: {
    flexGrow: { xs: 0, md: 1 },
  },
  img: {
    width: { xs: 200, md: 300 },
    filter: "invert(100%)",
  },
  logo: {
    flexGrow: 1,
    display: { xs: "flex", md: "block" },
    justifyContent: { xs: "center", md: "none" },
    alignItems: { xs: "center", md: "none" },
    mx: { xs: 0, md: 4 },
  },
  button: {
    px: {xs: 2, md: 3},
  },
  navButton: {
    m: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

const navList = [
  { text: "home", icon: <Home /> },
  { text: "listing", icon: <List /> },
  { text: "let's move", icon: <Forward /> },
  { text: "about us", icon: <Info /> },
];

function Navbar(props) {
  const {web, mobile} = props;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Box sx={styles.container}>
      <AppBar position="static">
        <Box sx={mobile}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => setNavOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={navOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              open={navOpen}
              onClose={() => setNavOpen(false)}
            >
              {navList.map((nav) => (
                <MenuItem key={`mi-${nav.text}`}>
                  <Button startIcon={nav.icon} variant="caption">
                    {nav.text.toUpperCase()}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={styles.logo}>
              <Box
                component="img"
                sx={styles.img}
                src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
              />
            </Box>
          </Toolbar>
        </Box>
        <Box sx={web}>
          <Box sx={styles.logo}>
            <Box
              component="img"
              sx={styles.img}
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
            />
          </Box>
          <Box sx={styles.navButton}>
            {navList.map((nav) => (
              <BorderButton
                key={`navButton-${nav.text}`}
                variant="text"
                text={nav.text}
                textColor="#FFFFFF"
                effectColor="#FFFFFF"
                style={styles.button}
              />
            ))}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
