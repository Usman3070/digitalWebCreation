import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import MellowmenComp from "../components/MellowmenComp";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
const Mellowmen = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.skating}>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)", paddingBottom: "50px" }}
        >
          <Navbar />
          <MellowmenComp
            title1='Your wallet'
            title2='RoobChronicle Staked'
            subtitle='5MpA. . . .v7Wc929'
            title3='Earnings :'
            title4='Reward rate'
            subtitle1='0.000000'
            subtitle2='10 ROOB/day'
          />
          <Grid
            container
            lg={12}
            md={12}
            sm={12}
            sx={{ marginTop: "30px" }}
            spacing={4}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  // width: "70%",

                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft: {
                    xl: "30px",
                    lg: "30px",
                    md: "30px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    Select Your Tokens
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "30px",
                      marginBottom: "400px",
                      padding: "10px",
                      color: "#fff",
                    }}
                  >
                    No allowed tokens found in wallet.
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "flex-start",
                      lg: "flex-start",
                      md: "flex-start",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      marginBottom: "15px",
                      marginLeft: "15px",
                      backgroundColor: "#04212b",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#04212b",
                      },
                    }}
                  >
                    Stake Token (0)
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  // width: "70%",

                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.3)",
                  backdropFilter: "blur(10px)",
                  margin: "auto",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>
                  <Typography sx={{ padding: "10px", color: "#fff" }}>
                    View Staked Tokens (0)
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "30px",
                      marginBottom: "400px",
                      padding: "10px",
                      color: "#fff",
                    }}
                  >
                    No tokens currently staked.
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xl: "flex-end",
                      lg: "flex-end",
                      md: "flex-end",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      marginBottom: "15px",
                      marginRight: "15px",
                      backgroundColor: "#04212b",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#04212b",
                      },
                    }}
                  >
                    Unstake Token (0)
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Mellowmen;
