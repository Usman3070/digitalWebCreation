import {
  Container,
  Typography,
  Box,
  Grid,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import roundGif from "../assets/Media/gif1.gif";
import avatar from "../assets/Media/avatar.gif";
import Navbar from "../components/Navbar";
import useStyles from "../styles";
import roob from "../assets/Media/roob.gif";

const Skating = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };
  return (
    <>
      <Box className={classes.skating}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <Navbar />
          <Box>
            <Container
              sx={{ width: { lg: "60%", md: "80%", sm: "100%", xs: "90%" } }}
            >
              <Box
                sx={{
                  border: "2px solid #000",
                  width: "100%",
                  padding: "10px",
                }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    textAlign: "center",
                    color: "rgb(4,33,43,1)",
                    textShadow: "1px 1px 10px #8bef8b",
                    zIndex: "1",
                    fontSize: {
                      lg: "42px",
                      md: "38px",
                      sm: "34px",
                      xs: "16px",
                    },
                  }}
                >
                  ROOB CHRONICLES STAKING $ROOB
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#000",
                  marginTop: "5%",
                  borderRadius: "14px",
                  padding: "40px",
                }}
              >
                <Grid container lg={12} md={12} sm={12} xs={12} spacing={4}>
                  <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: {
                          lg: "justify",
                          md: "justify",
                          sm: "left",
                          xs: "left",
                        },
                        fontSize: {
                          lg: "14px",
                          md: "14px",
                          sm: "12px",
                          xs: "12px",
                        },
                      }}
                    >
                      $Roob token is purely a utility token, that will be used
                      within the Roob Chronicles ecosystem and its other
                      utilities. These reward tokens can only be generated via
                      staking your Roob NFTs. It will be used for Upcoming Roob
                      Chronicles NFT collections mints, Special discounts on all
                      Roob merchandise in Roobs future marketplace, Roobs future
                      raffle & auction platform, Metaverse future P2E Roobs game
                      & Purchase Whitelist from other projects, NFTs of other
                      projects & Merch.
                      <br />
                      Holders will have the option to stake their NFTs for a
                      period of 7 Days, 15 Days Or 30 Days & they will begin to
                      accumulate the 15 $ROOB Per Day OR .625 $ROOB Per Hour. 15
                      Days will yield 5% bonus tokens. 30 days will yield 15%
                      bonus tokens.
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <CardMedia
                      image={roundGif}
                      sx={{
                        height: {
                          lg: "220px",
                          md: "220px",
                          sm: "200px",
                          xs: "128px",
                        },
                        width: {
                          lg: "220px",
                          md: "220px",
                          sm: "200px",
                          xs: "128px",
                        },
                        marginLeft: { xl: "25%", md: "25%", sm: "25%" },
                        marginTop: {
                          xl: "10%",
                          lg: "15%",
                          md: "5%",
                          sm: "30%",
                          xs: "250%",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5%",
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: "rgb(4,33,43,1)",
                    padding: "12px 28px",
                    borderRadius: "5px",
                    color: "#fff",
                    fontWeight: "500",
                    boxShadow: "3",
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      backgroundColor: "rgb(4,33,43,1)",
                    },
                  }}
                >
                  Connect Wallet
                </Button>
              </Box>
              <Box sx={{ marginTop: "5%" }}>
                <Grid container lg={12} md={12} sm={12} xs={12} spacing={4}>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        marginTop: { lg: "8px", xs: "1px" },
                        fontSize: {
                          lg: "16px",
                          md: "14px",
                          sm: "12px",
                          xs: "10px",
                        },
                      }}
                    >
                      Check Balance / Claim
                    </Typography>
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={3}>
                    <input
                      type='text'
                      value={value}
                      onChange={handleChange}
                      style={{
                        width: "80%",
                        background: "transparent",
                        border: "2px solid rgb(255 255 255)",
                        textAlign: "center",
                        padding: "8px",
                        marginTop: "2%",
                        color: "#fff",
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <Button
                      sx={{
                        backgroundColor: "rgb(4,33,43,1)",
                        padding: {
                          lg: "12px 28px",
                          md: "10px 25px",
                          sm: "8px 22px",
                          xs: "6px 19px",
                        },
                        borderRadius: "5px",
                        color: "#fff",
                        fontWeight: "500",
                        boxShadow: "3",
                        "&:hover": {
                          //you want this to be the same as the backgroundColor above
                          backgroundColor: "rgb(4,33,43,1)",
                        },
                      }}
                    >
                      Check Balance
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#000",
                  marginTop: "5%",
                  borderRadius: "14px",
                  padding: "40px",
                }}
              >
                <Grid container lg={12} md={12} sm={12} xs={12} spacing={4}>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <CardMedia
                      image={avatar}
                      sx={{
                        height: {
                          lg: "260px",
                          md: "200px",
                          sm: "150px",
                          xs: "100px",
                        },
                        width: {
                          lg: "260px",
                          md: "200px",
                          sm: "150px",
                          xs: "100px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: {
                          lg: "justify",
                          md: "justify",
                          sm: "left",
                          xs: "left",
                        },
                        marginTop: {
                          xl: "20%",
                          lg: "25%",
                          md: "14%",
                          sm: "12%",
                        },
                        fontSize: {
                          lg: "14px",
                          md: "14px",
                          sm: "12px",
                          xs: "12px",
                        },
                      }}
                    >
                      Anyone can check what balance each of our Roob NFTs has
                      accumulated. But only the owner of the Roob NFT can claim
                      it.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: "5%" }}>
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    paddingBottom: "10%",
                  }}
                >
                  Currently, $ROOB is a utility Token, it holds NO monetary
                  value, 1 $ROOB = 1 $ROOB .
                  <br />
                  <br />
                  As the demand for the token rises and its usage hits its
                  capacity, will start to add some liquidity for the token. As
                  the token gains popularity and we are happy with the in-house
                  uses of the token, we will work with our team to take the
                  token into an ICO, bringing it to the public.
                </Typography>
              </Box>
            </Container>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Skating;
