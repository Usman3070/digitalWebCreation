import { Grid, Typography, Container, Button, CardMedia } from "@mui/material";
import React from "react";
import useStyles from "../styles";
import discord from "../assets/Media/discord-white.svg";
import hero1 from "../assets/Media/hero1.png";
import hero2 from "../assets/Media/hero2.png";
import hero3 from "../assets/Media/hero3.png";
import hero4 from "../assets/Media/hero4.png";
import circle from "../assets/Media/circle1.png";
import { fontSize } from "@mui/system";
const HeroSection = () => {
  const classes = useStyles();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id='home'>
      <Grid container spacing={2}>
        <Grid item sx={{ display: "relative" }}>
          <Typography
            variant='h4'
            className={classes.heroTitle}
            sx={{
              fontWeight: "800",
              fontSize: "42px",
              paddingLeft: { xs: "5px", md: "120px" },
            }}
          >
            DIGITAL WEB CREATION
            <br /> CLUB{" "}
            <span
              style={{
                fontWeight: "400",
                fontSize: "26px",
              }}
            >
              Powered by Roob Chronicles
            </span>
          </Typography>
          <Typography
            className={classes.heroSubtitle}
            sx={{ fontSize: "30px", paddingLeft: { xs: "5px", md: "120px" } }}
          >
            Get You Meta Identity
            <br />
            Become part of the Future
          </Typography>
          <Button
            variant='contained'
            className={classes.button}
            sx={{
              padding: "12px",
              marginLeft: { xs: "5px", md: "121px" },
              width: { xs: "50%", md: "43%" },
              borderRadius: "16px",
              marginTop: "20px",
              backgroundColor: "#573bfe",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            onClick={() => openInNewTab("https://discord.com/invite/dwcc")}
          >
            <img src={discord} />
            JOIN OUR DISCORD
          </Button>
        </Grid>
        <Grid item display={{ xs: "none", md: "block" }}>
          <CardMedia image={hero1} className={classes.image1} />
          <CardMedia image={hero2} className={classes.image2} />
          <CardMedia image={hero3} className={classes.image3} />
          <CardMedia image={hero4} className={classes.image4} />
          <CardMedia image={circle} className={classes.circle1} />
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
