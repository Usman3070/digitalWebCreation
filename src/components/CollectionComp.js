import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import sphereCollection from "../assets/Media/sphereCollection.png";
import useStyles from "../styles";
const CollectionComp = () => {
  const classes = useStyles();
  return (
    <section id='collections'>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Typography
          sx={{
            color: "#9c9d9d",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          CREATIVE MODERN LIMITED NFT COLLECTIONS
        </Typography>
        {/* <CardMedia
        image={sphereCollection}
        className={classes.sphereCollection}
      /> */}
        <Typography
          variant='h3'
          sx={{
            color: "#fff",
            paddingBottom: "300px",
            textAlign: "center",
            marginBottom: "-130px",
          }}
        >
          OUR NFT COLLECTIONS
        </Typography>
      </Box>
    </section>
  );
};

export default CollectionComp;
