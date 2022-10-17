import { Card, Grid, Typography, CardContent, CardMedia } from "@mui/material";
import React from "react";
import useStyles from "../styles";
import c1 from "../assets/Media/c1.png";
import c2 from "../assets/Media/c2.png";
import c3 from "../assets/Media/c3.png";
import c4 from "../assets/Media/c4.png";
import c5 from "../assets/Media/c5.png";
import c6 from "../assets/Media/c6.png";

const SecondCollection = () => {
  const classes = useStyles();
  return (
    <Grid container md={12} sm={12} xs={12}>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image={c1}
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              Genesis Boss Sloth Roob
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image={c2}
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              Sloth Roob Official Collection
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image='/mammoth.png'
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              MammothBoof
            </Typography>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#9c9d9d",
              }}
              fontFamily='Raleway'
            >
              coming soon
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image={c1}
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              Genesis Boss Sloth Roob
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image={c1}
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              Genesis Boss Sloth Roob
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={12} sm={12} xs={12} sx={{ padding: "20px" }}>
        <Card
          className={classes.Ccard1}
          sx={{
            backgroundColor: "#573bfe",
            padding: "23px",
            borderRadius: "15px",
          }}
        >
          <CardMedia
            image={c1}
            sx={{
              height: "270px",
              width: "250px",
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                marginLeft: "80px",
                color: "#fff",
                fontWeight: "600",
                fontSize: "19px",
              }}
              fontFamily='Raleway'
            >
              Genesis Boss Sloth Roob
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SecondCollection;
