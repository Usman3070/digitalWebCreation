import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import w1 from "../assets/Media/w1.png";
import w2 from "../assets/Media/w2.png";
import w3 from "../assets/Media/w3.png";
import Btn from "./Btn";
import useStyles from "../styles";
const Whitepapers = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id='whitepapers'>
      <Typography
        sx={{
          color: "#9c9d9d",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: {
            xs: "-4px",
            sm: "-4px",
            md: "0px",
            lg: "0px",
            xl: "0px",
          },
        }}
        fontFamily='Raleway-bolder'
      >
        OUR FILES
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "800",
          textAlign: "center",
          fontSize: "34px",
        }}
        fontFamily='Raleway-bolder'
      >
        WHITEPAPERS
      </Typography>
      <Grid container md={12} lg={12}>
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          spacing={4}
          sx={{ justifyContent: "center", padding: "0px 5%" }}
        >
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",

                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
              }}
            >
              <CardMedia
                image={w1}
                sx={{
                  margin: "auto",
                  height: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                  width: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    textAlign: "center",
                  }}
                  fontFamily='Raleway'
                >
                  Whitepaper
                </Typography>
                <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-whitepaper/dwcc-whitepaper/overview"
                    )
                  }
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",
                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
              }}
            >
              <CardMedia
                image={w2}
                sx={{
                  margin: "auto",
                  height: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                  width: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    textAlign: "center",
                  }}
                  fontFamily='Raleway'
                >
                  Licensing Rights
                </Typography>
                <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://digital-web-creation-club.gitbook.io/digital-web-creation-club-licensing-agreement/digital-web-creation-club-licensing-agreement"
                    )
                  }
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                backgroundColor: "#04212b",
                borderRadius: "20px",
                paddingTop: { lg: "30px", md: "30px", sm: "20px", xs: "70px" },
                height: "100%",
              }}
            >
              <CardMedia
                image={w3}
                sx={{
                  margin: "auto",
                  justifyContent: "center",
                  height: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                  width: {
                    xl: "320px",
                    lg: "320px",
                    md: "320px",
                    sm: "300px",
                    xs: "200px",
                  },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "26px",
                    letterSpacing: "2px",
                    // marginLeft: { lg: "23px", md: "23px", xs: "13px" },
                    textAlign: "center",
                  }}
                  fontFamily='Raleway'
                >
                  Roob Chronicles
                </Typography>
                <Btn
                  title='LEARN MORE'
                  onClick={() =>
                    openInNewTab(
                      "https://online.flippingbook.com/view/1040088348/"
                    )
                  }
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Whitepapers;
