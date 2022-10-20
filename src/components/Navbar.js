// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
// import withStyles from "@material-ui/core/styles/withStyles";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// // Import style
// import styles from "./Navbar.style";

// import companyLogo from "../assets/Media/logo.png";

// const Navbar = (props) => {
//   const { classes } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   return (
//     <>
//       <AppBar
//         position='fixed'
//         color='default'
//         elevation={0}
//         className={`${classes.appBar} ${
//           trigger === false ? "" : classes.appBarScrolled
//         }`}
//       >
//         <Toolbar className={classes.toolbar}>
//           <div className={classes.toolbarLogo}>
//             <img src={companyLogo} alt='company logo' />
//           </div>
//           <nav>
//             <Link
//               variant='button'
//               color='textPrimary'
//               href='#'
//               className={classes.link}
//             >
//               Home
//             </Link>
//             <Link
//               variant='button'
//               color='textPrimary'
//               href='#'
//               className={classes.link}
//             >
//               Services
//             </Link>
//             <Link
//               variant='button'
//               color='textPrimary'
//               href='#'
//               className={classes.link}
//             >
//               Feature Posts
//             </Link>
//             <Link
//               variant='button'
//               color='textPrimary'
//               href='#'
//               className={classes.link}
//             >
//               Team
//             </Link>
//             <Link
//               variant='button'
//               color='textPrimary'
//               href='#'
//               className={classes.link}
//             >
//               Contact
//             </Link>
//           </nav>
//           <Button
//             href='#'
//             color='primary'
//             variant='outlined'
//             className={classes.link}
//           >
//             Client Portal
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Navbar);

import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/Media/logo.png";
import withStyles from "@material-ui/core/styles/withStyles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import styles from "./Navbar.style";
import CloseIcon from "@mui/icons-material/Close";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const drawerWidth = "100%";
// const navItems = [
//   "Home",
//   "ROADMAP",
//   "COLLECTIONS",
//   "WHITEPAPERS",
//   "FAQ",
//   "TEAM",
//   "CONTACT",
// ];

function Navbar(props) {
  const { classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: "#04212b",
        height: "100vh",
        color: "#fff",
        width: "100%",
      }}
    >
      {/* <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <CloseIcon
                color='#fff'
                sx={{ display: "flex", float: "right" }}
                onClick={handleDrawerToggle}
              />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                }}
              >
                <Link
                  to='/#home'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  HOME
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
                onClick={handleDrawerToggle}
              >
                {/* <Link
                  to='/#home'
                  style={{ textDecoration: "none", color: "#04212b" }}
                  className={`${classes.menu} ${
                    trigger === false ? "" : classes.appBarScrolledMenu
                  }`}
                > */}
                MINT
                {/* </Link> */}
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
                onClick={handleDrawerToggle}
              >
                <Link
                  to='/staking'
                  style={{ textDecoration: "none", color: "#fff" }}
                  className={`${classes.menu} ${
                    trigger === false ? "" : classes.appBarScrolledMenu
                  }`}
                >
                  STAKING
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#roadmap'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  ROADMAP
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#collections'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  COLLECTIONS
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#whitepapers'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  {" "}
                  WHITEPAPERS
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#faq'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  FAQ
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#team'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  TEAM
                </Link>
              </Button>
              <br />
              <Button
                sx={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: "#fff",
                }}
                // className={`${classes.menu} ${
                //   trigger === false ? "" : classes.appBarScrolledMenu
                // }`}
              >
                <Link
                  to='/#contact'
                  style={{ textDecoration: "none", color: "#fff" }}
                  // className={`${classes.menu} ${
                  //   trigger === false ? "" : classes.appBarScrolledMenu
                  // }`}
                  onClick={handleDrawerToggle}
                >
                  CONTACT
                </Link>
              </Button>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handlerNavigation = (item) => {
    console.log(item, "hhh");
  };

  return (
    <Box sx={{ display: "flex", marginBottom: "20px" }}>
      <AppBar
        component='nav'
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        // position='fixed'
        elevation={0}
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Toolbar
          className={classes.toolbar}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              paddingLeft: { xl: "52px", lg: "52px", md: "2px" },
              paddingTop: "10px",
            }}
          >
            <img src={logo} />
          </Typography>
          <IconButton
            color='inherit'
            size='small'
            aria-label='open drawer'
            // edge='start'
            onClick={handleDrawerToggle}
            sx={
              {
                // display: "flex",
                // justifyContent: "end",
                // mr: 5,
                // position: "absolute",
                // right: { xs: "1%", },
              }
            }
          >
            <MenuIcon
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <Button>
              <Link
                to='/#home'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  HOME
                </Typography>
              </Link>
            </Button>
            <Button
              className={`${classes.menu} ${
                trigger === false ? "" : classes.appBarScrolledMenu
              }`}
              sx={{
                color: "#fff",
              }}
            >
              <Link
                to='/#home'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  MINT
                </Typography>
              </Link>
            </Button>
            <Button
              className={`${classes.menu} ${
                trigger === false ? "" : classes.appBarScrolledMenu
              }`}
            >
              <Link
                to='/staking'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    // color: "#04212b",
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  STAKING
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#roadmap'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  {" "}
                  ROADMAP
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#collections'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  COLLECTIONS
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#whitepapers'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  {" "}
                  WHITEPAPERS
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#faq'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  FAQ
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#team'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  TEAM
                </Typography>
              </Link>
            </Button>
            <Button>
              <Link
                to='/#contact'
                style={{ textDecoration: "none", color: "#04212b" }}
                className={`${classes.menu} ${
                  trigger === false ? "" : classes.appBarScrolledMenu
                }`}
              >
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: { xl: "16px", lg: "14px", md: "10px" },
                    paddingRight: { xl: "40px", lg: "20px", md: "1px" },
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      color: "#fff",
                    },
                    fontFamily: "Raleway-bolder",
                  }}
                >
                  CONTACT
                </Typography>
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  classes: PropTypes.object.isRequired,
  window: PropTypes.func,
};

export default withStyles(styles)(Navbar);

// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar
//         component="nav"
//         position="static"
//         sx={{ boxShadow: "none", background: "transparent" }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;

// import React from "react";
// import {
//   Typography,
//   AppBar,
//   CssBaseline,
//   Toolbar,
//   Container,
//   Box,
// } from "@mui/material";
// import logo from "../assets/Media/logo.png";
// import useStyles from "../styles";
// import AnchorLink from "react-anchor-link-smooth-scroll";

// const Navbar = () => {
//   const classes = useStyles();
//   return (
//     <Box sx={{ position: "sticky", top: "0" }}>
//       <CssBaseline />
//       <AppBar
//         position="static"
//         sx={{ boxShadow: "none", backgroundColor: "transparent" }}
//       >
//         <Toolbar>
//           <Container sx={{ marginLeft: "70px" }}>
//             <img src={logo} alt="logo" />
//           </Container>
//           <Container
//             sx={{
//               display: { xs: "none", md: "flex" },
//               direction: "row",
//               justifyContent: "space-evenly",
//               padding: "40px",
//             }}
//           >
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               HOME
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               ROADMAP
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               COLLECTIONS
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               WHITEPAPERS
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               FAQ
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               TEAM
//             </Typography>
//             <Typography
//               sx={{ fontWeight: "800", color: "#04212b", paddingRight: "40px" }}
//             >
//               CONTACT
//             </Typography>
//           </Container>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;
