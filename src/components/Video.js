import { CardMedia, Typography } from "@mui/material";
import React from "react";

const Video = () => {
  return (
    <>
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component='video'
          image='/video.mp4'
          controls
          sx={{
            maxWidth: { md: "700px", xs: "500px" },
            width: { md: "100%", xs: "60%" },
            borderRadius: "20px",
          }}
        />
      </Typography>
    </>
  );
};

export default Video;
