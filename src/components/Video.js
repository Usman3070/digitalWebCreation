import { CardMedia, Typography } from "@mui/material";
import React from "react";

const Video = () => {
  return (
    <>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component='video'
          image='/video.mp4'
          sx={{
            maxWidth: "700px",
            width: "100%",
            borderRadius: "20px",
          }}
          autoPlay
        />
      </Typography>
    </>
  );
};

export default Video;
