import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
          marginTop: "-2px",
        }}
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
      >
        WHITEPAPERS
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item>
          <Card
            className={classes.WhitepaperCard}
            sx={{ backgroundColor: "#04212b", borderRadius: "20px" }}
          >
            <CardMedia image={w1} className={classes.Wimage} />
            <CardContent>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "26px",
                  letterSpacing: "2px",
                  marginBottom: "-39px",
                }}
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
        <Grid item>
          <Card
            className={classes.WhitepaperCard}
            sx={{ backgroundColor: "#04212b", borderRadius: "20px" }}
          >
            <CardMedia image={w2} className={classes.Wimage} />
            <CardContent>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "26px",
                  letterSpacing: "2px",
                  marginBottom: "-39px",
                }}
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
        <Grid item>
          <Card
            className={classes.WhitepaperCard}
            sx={{ backgroundColor: "#04212b", borderRadius: "20px" }}
          >
            <CardMedia image={w3} className={classes.Wimage} />
            <CardContent>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "26px",
                  letterSpacing: "2px",
                  marginBottom: "-39px",
                }}
              >
                The Chronicles of Roob
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
    </section>
  );
};

export default Whitepapers;
