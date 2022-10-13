import { Typography, Container, Grid, Card, CardMedia } from "@mui/material";
import React from "react";
import pinkSphere from "../assets/Media/pinkSphere.png";
import circle1 from "../assets/Media/circle1.png";
const Team = () => {
  const teamsImg = [
    {
      img: "/hero1.png",
      title: "Mono",
      subtitle: "Mono, Co-founder, Artist & Business Manager",
    },
    {
      img: "/t2.png",
      title: "Luke",
      subtitle: "Co-founder, Business Development",
    },
    {
      img: "/t3.png",
      title: "Chase",
      subtitle: "Co-founder, Artist & Project Manager",
    },
    {
      img: "/t4.png",
      title: "Mohammad",
      subtitle: "Co-founder, Artist & Marketing Manager",
    },
    {
      img: "/t5.png",
      title: "Yullia",
      subtitle: "Illustration & Pixels",
    },
    {
      img: "/t6.png",
      title: "Omotosho",
      subtitle: "Technology",
    },
    {
      img: "/t7.png",
      title: "Hamid",
      subtitle: "Marketing & Community Engagement",
    },
    {
      img: "/t8.png",
      title: "Rahul",
      subtitle: "Graphic Designer",
    },
  ];
  return (
    <section id='team'>
      <Typography
        sx={{
          color: "#9c9d9d",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "14px",
          paddingTop: "80px",
        }}
        variant='h4'
      >
        OUR META BRAINS
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: "#fff",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        THE TEAM
      </Typography>
      <Container sx={{ position: "relative" }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "100px",
          }}
          variant='body1'
          paragraph
        >
          Our team is an excellent combination of technology and strategy. Most
          of the DWCC team members are experts from the traditional art industry
          with experience in renowned art institutions. Our core members include
          professional engineers with blockchain and cryptography related
          experience from leading internet companies. DWCC is a leading player
          in the NFT field both in terms of its team and technical capacity.
        </Typography>
        {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            {teamsImg.map((person) => (
              <>
                {console.log(person.img, "data")}

                <Card
                  sx={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "125px",
                  }}
                >
                  <CardMedia
                    image={person.img}
                    sx={{
                      height: "250px",
                      width: "250px",
                    }}
                  />
                </Card>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "400",
                    fontSize: "30px",
                    marginBottom: "20px",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  {person.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#4efd93",
                    fontWeight: "400",
                    fontSize: "17px",
                    marginBottom: "20px",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  {person.subtitle}
                </Typography>
              </>
            ))}
          </Grid>
        </Grid> */}
        {/* <Grid
          container
          md={12}
          lg={12}
          // display={"flex"}
        > */}
        <Grid
          item
          container
          md={12}
          sm={12}
          lg={12}
          spacing={4}
          sx={{ display: "flex", justifyContent: "center" }}
          // sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          {teamsImg.map((person) => (
            <>
              <Grid item md={4} sm={6} lg={3}>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    <Card
                      sx={{
                        height: { md: "250px", xs: "200px" },
                        width: { md: "250px", xs: "200px" },
                        borderRadius: "125px",
                      }}
                    >
                      <CardMedia
                        image={person.img}
                        sx={{
                          height: { md: "250px", xs: "200px" },
                          width: { md: "250px", xs: "200px" },
                        }}
                      />
                    </Card>
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "400",
                      fontSize: "30px",

                      marginTop: "30px",
                    }}
                  >
                    {person.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4efd93",
                      fontWeight: "400",
                      fontSize: "17px",
                      textAlign: "center",

                      marginTop: "30px",
                    }}
                  >
                    {person.subtitle}
                  </Typography>
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
        {/* </Grid> */}

        <Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "200px",
            }}
          >
            <Grid item>
              <Card
                sx={{
                  height: { md: "250px", xs: "200px" },
                  width: { md: "250px", xs: "200px" },
                  borderRadius: "125px",
                }}
              >
                <CardMedia
                  image='/t9.png'
                  sx={{
                    height: { md: "250px", xs: "200px" },
                    width: { md: "250px", xs: "200px" },
                  }}
                />
              </Card>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "30px",
                  marginBottom: "20px",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                Mbot
              </Typography>
              <Typography
                sx={{
                  color: "#4efd93",
                  fontWeight: "400",
                  fontSize: "17px",
                  marginBottom: "20px",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                Writer & Content Creation
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <CardMedia
          image={pinkSphere}
          sx={{
            height: "300px",
            width: "300px",
            position: "absolute",
            bottom: "20%",
            left: "-10%",
            display: { md: "block", xs: "none", sm: "none" },
          }}
        />
        <CardMedia
          image={circle1}
          sx={{
            height: "300px",
            width: "300px",
            position: "absolute",
            bottom: "10%",
            right: "-10%",
            display: { md: "block", xs: "none", sm: "none" },
          }}
        />
      </Container>
    </section>
  );
};

export default Team;
