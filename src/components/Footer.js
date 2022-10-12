import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/Media/logo.png";
import linktree from "../assets/Media/linktree.svg";
import discord from "../assets/Media/discord.svg";
import twitter from "../assets/Media/twitter.svg";
import facebook from "../assets/Media/facebook.svg";
import instagram from "../assets/Media/instagram.png";
import youtube from "../assets/Media/youtube.svg";
import tiktok from "../assets/Media/tiktok.png";
import footerImg from "../assets/Media/footerImg.png";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <img src={logo} height='67px' width='200px' />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h4'
          sx={{
            color: "#fff",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "50px",
            marginBottom: "40px",
            fontSize: "42px",
          }}
        >
          STAY CONNECTED!
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div
          onClick={() =>
            openInNewTab("https://linktr.ee/DigitalWebCreationClub")
          }
        >
          <CardMedia
            image={linktree}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div onClick={() => openInNewTab("https://discord.com/invite/dwcc")}>
          <CardMedia
            image={discord}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div onClick={() => openInNewTab("https://twitter.com/SlothRoob")}>
          <CardMedia
            image={twitter}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div
          onClick={() =>
            openInNewTab("https://www.facebook.com/TheChroniclesofRoob")
          }
        >
          <CardMedia
            image={facebook}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              "https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg"
            )
          }
        >
          <CardMedia
            image={instagram}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              "https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg"
            )
          }
        >
          <CardMedia
            image='/youtube.svg'
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div
          onClick={() => openInNewTab("https://www.tiktok.com/@slothroobnft")}
        >
          <CardMedia
            image={tiktok}
            sx={{
              height: "48px",
              width: "48px",
              marginRight: { md: "20px", xs: "12px" },
            }}
          />
        </div>
        <div
          onClick={() => openInNewTab("https://digitalwebcreation.medium.com/")}
        >
          <CardMedia image={footerImg} sx={{ height: "48px", width: "48px" }} />
        </div>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            paddingTop: "50px",
            marginBottom: "40px",
          }}
        >
          ©2022, Digital Web Creation Club " DWCC "
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
