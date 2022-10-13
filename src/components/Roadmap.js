import { Box, Grid, Typography, Container, CardMedia } from "@mui/material";
import React from "react";
import rd1 from "../assets/Media/rd1.png";
import rd2 from "../assets/Media/rd2.png";
import rd3 from "../assets/Media/rd3.png";
import sphere from "../assets/Media/sphere.png";
import rbgSphere from "../assets/Media/rgbSphere.png";
import useStyle from "../styles";
import RoadmapDesc from "./RoadmapDesc";

const Roadmap = () => {
  const roadMapContent = [
    {
      title: "Q3 2021",
      desc: "Formation of team and advisors for development of the project & Creation of project architecture and concept.",
      img: "/sphere.png",
    },
    {
      title: "Q4 2021",
      desc: 'The first draft of the "Sloth Roob " character. Sloth Roob is the first most iconic digital character “Sloth Roob” from DWCC’s book ” The Chronicles of Roob”.',
      img: "/sphere.png",
    },
    {
      title: "Q1 2022",
      desc: '- DWCC Official website lunch. - "The Chronicles of Roob" first edition book release - Airdrop of 100 Boss Sloth Roob - Genesis 100 Editions Collection ( Teaser Collection ).',
      img: "/sphere.png",
    },
    {
      title: "Q2 2022",
      desc: "- Launch of 5353 Sloth Roob Official Collection. - The beginning of the search mission is to find the SlothRoob friend’s on the Ethereum network. MammothBoof, SquirrelToot, TigerHooch & WeaselWooz.",
      img: "/rgbSphere.png",
    },
    {
      title: "Q4 2022",
      desc: "-	Launch of 4343 Mammoth Boof Official Collection - The beginning of the search mission to find the Sloth Roob's friends on the Ethereum network. ",
      img: "/rgbSphere.png",
    },
    {
      title: "Q4 2022",
      desc: "-	Staking Platform Development & Launch for holders. ",
      img: "/rgbSphere.png",
    },
    {
      title: "Q1 2023",
      desc: "-	The Launch of SquirrelToot, TigerHooch & WeaselWooz Collections in the Metaverse.",
      img: "/rgbSphere.png",
    },
    {
      title: "Q2 202",
      desc: "-	The Chronicles of Roob Second Edition Book Release with publishing house. ",
      img: "/rgbSphere.png",
    },
    {
      title: "Q2 2023",
      desc: "-	Roob Chronicles Epic Adventure Game",
      img: "/rgbSphere.png",
    },
  ];
  const classes = useStyle();
  return (
    <section id='roadmap' style={{ paddingBottom: "250px" }}>
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "28px",
            display: "block",
            textAlign: "center",
            paddingTop: "260px",
            marginBottom: "80px",
          }}
        >
          ROADMAP
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            md={2}
            sm={4}
            xs={0}
            sx={{
              display: { md: "flex", xs: "none" },
              flexDirection: "column",
              marginRight: "70px",
              marginTop: "200px",
            }}
          >
            <img src={rd1} />
            <img src={rd2} className={classes.rd2} />
            <img src={rd3} className={classes.rd3} />
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            {roadMapContent.map((roadmap, index) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "22px 0",
                  }}
                >
                  {/* <CardMedia
                  image={sphere}
                  sx={{ height: "120px", width: "120px" }}
                /> */}
                  <Typography
                    sx={
                      index > 2
                        ? {
                            width: "15%",
                            display: { md: "flex", xs: "none" },
                            alignItems: "center",
                            // paddingLeft: "20px",
                          }
                        : {
                            width: "15%",
                            display: { md: "flex", xs: "none" },
                            alignItems: "center",
                          }
                    }
                  >
                    <img src={roadmap.img} />

                    <Typography
                      sx={
                        index > 2
                          ? {
                              height: "3px",
                              backgroundColor: "#fff",
                              width: "60px",
                            }
                          : {
                              height: "3px",
                              backgroundColor: "#fff",
                              width: "40px",
                            }
                      }
                    ></Typography>
                  </Typography>

                  <Box
                    sx={
                      index > 2
                        ? {
                            padding: { md: "34px", xs: "12px" },
                            width: { md: "85%", xs: "100%" },
                            backgroundColor: "#04212b",
                            borderRadius: "20px",
                            // marginLeft: "26px",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            zIndex: "10",
                          }
                        : {
                            padding: { md: "34px", xs: "12px" },
                            width: { md: "85%", xs: "100%" },
                            backgroundColor: "#04212b",
                            borderRadius: "20px",
                            marginLeft: {
                              md: "19px",
                              lg: "19px",
                              sm: "0px",
                              xs: "0px",
                            },
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            zIndex: "10",
                          }
                    }
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={
                          index > 2
                            ? {
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                paddingBlockEnd: "24px",
                                marginBlockStart: "32px",
                                color: "#573bfe",
                                fontSize: "16px",
                                fontWeight: "800",
                              }
                            : {
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                paddingBlockEnd: "12px",
                                marginBlockStart: "12px",
                                color: "#4efd93",
                                fontSize: "16px",
                                fontWeight: "800",
                              }
                        }
                      >
                        {roadmap.title}
                      </Typography>
                      <Typography
                        sx={{
                          height: "52px",
                          backgroundColor: "#fff",
                          width: "1px",
                          marginRight: "20px",
                        }}
                      ></Typography>
                    </Typography>
                    <Typography>{roadmap.desc}</Typography>
                  </Box>
                </Box>
                {/* <Typography
                  sx={{
                    height: "90px",
                    backgroundColor: "#fff",
                    width: "2px",
                  }}
                ></Typography> */}
              </>
            ))}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Roadmap;
