import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import useStyles from "../styles";
import React, { useState } from "react";
import Btn from "./Btn";
import GridComp from "./GridComp";
const GridSection = () => {
  const grids = [
    {
      img: "/grid1.png",
      vision: "OUR VISION",
      title: "ROOB'S COMMUNITY",
      subtitle: "Keystone",
      state: false,
      description: [
        "We are bridging art and utility while building a great community around our digital characters for all members in the entertainment industry.Everybody should have a meta identity and be part of the metaverse future.",
        "We are creating an exclusive “ Roobs Community “.",
      ],
      image: "/sphere1.png",
    },
    {
      img: "/grid2.png",
      vision: "WHEN EVERYTHING STARTED",
      title: "JUST AN IDEA",
      subtitle: "The Beginning",
      description: [
        "Project was founded by a team of 5 designers and artists in September 2021. They wanted to create a unique concept different to anything around. They have started working on a short story about 5 characters.",
        "Each character is based on each of the designer’s artist’s style and personality.",
        "The created a book called “ The Chronicles of Roob “. It’s a story book talking about the adventure of 5 characters. Roob the Sloth , Boof the Mammoth, Toot the Squirrel, Hooch the Tiger & Wooz the Weasel",
        "The team then started on the first draft of ``Sloth Roob `` character in such way that is connected to the revolution of the metaverse entrainment.",
        "5353 unique iconic digital characters of Sloth Roobs were created, and they will be ready to be in the Ethereum universe.",
      ],
      btnTitle: "SEE MORE",

      image: "/sphereCollection.png",
      state: false,
    },
    {
      img: "/grid3.png",
      vision: "THE NEW ERA IS ABOUT TO BEGIN",
      title: "WHAT'S NEXT?",
      subtitle: "The Future",
      description: [
        "5353 unique iconic digital characters of Sloth Roobs will be ready to connect with their holders and give them a unique meta identity soon.",
        "They will be available to mint on ERC-721 smart contract on the Ethereum blockchain very soon. Sloth Roobs are PFP with instant rarity ranking and unique meta identity for their holders.",
        "Upon the completion of the mint process of Sloth Roob, our team will be releasing the next phase of the project which is the launch of the other 4 collections Boof the Mammoth, Toot the Squirrel, Hooch the Tiger & Wooz the Weasel.",
        "Upon the completion of the 5 collections, our team will partner with a well-known story writer ( Top Secret ) publishing the full story book of “ Chronicles of Roob “.",
      ],
      btnTitle: "SEE MORE",
      image: "/sphere3.png",
      state: false,
    },
    {
      img: "/grid4.png",
      vision: "ONE COMMUNITY",
      title: "EXCLUSIVITY",
      subtitle: "Perks for Holder",
      description: [
        "- Holders of these unique NFTs will giving priority position to acquire future released NFTs . Yes, we call it “ Roobs List “ , we don’t call it “ Whitelist “ when you are with us.",
        "- Collect, Trade & have fun with our NFTs in market places .",
        "Special edition of “ The Chronicles of Roob “ story book once published. Exclusive membership to the “ Roobs “ club and their community giveaways.",
        "- Exclusive access to projects voting system and holders votes.",
        "- Exclusive access to partner’s collection at a discounted price.",
      ],
      btnTitle: "SEE MORE",

      image: "/sphere4.png",
      state: false,
    },
    {
      img: "/grid6.png",
      vision: "THE SKY IS THE LIMIT",
      title: "THE FIRST COLLECTION",
      subtitle: "Sloth Roob Official Collection",
      description: [
        "Sloth Roob is the first most iconic digital character from DWCC’s book ”The Chronicles of Roob”.",
        "-	Special NFT Airdrops to large holders.",
        "-	Staking platform rewards & Future $ROOB token airdrop ",
        "-	Exclusive membership to the Alpha Roobs club  and their community Cash & Raffle giveaways. Exclusive access to Ecosystem Partners, ALPHA Group, ALPHA Calls, Marketplace & DAO.",
        "-	Access to special edition of “ The Chronicles of Roob “ story book once published in 2023. ",
        "-	Early Access to the Roob Chronicles BETA version Epic game in 2023. ",
        "-	Exclusive access to projects voting system and holders votes .",
        "-	Exclusive access to partner’s collection at a discounted price",
      ],

      btnTitle: "SEE MORE",

      image: "/sphere6.png",
      state: false,
    },
    {
      img: "/repHero.png",
      vision: "TEASER PROJECT",
      title: "AIRDROP COLLECTION",
      subtitle: "Boss Sloth Roob - Genesis Editions",
      description: [
        "-	Ice Age Time ",
        "-	The Second Collection ",
        "-	Mammoth Boof Collection ",
        "-	This is the second iconic digital character from DWCC’s book ”Roob Chronicles ”. Mammoth Boof NFT is a collection of 4,343 unique iconic digital characters inspired by the Digital Web Creation Club's book - “Roob Chronicles ”. Mammoth Boof was founded by Sloth Roob, Mammoth Boof who was deep inside his cave, he had probably gone that far to hide from the cold. Roob got Boof's frozen figure out of the cave, with the help of the sun and its slow and steady hands he was able to break the ice using a rock and unfreeze him.Mammoth Boof limited edition comprises characters that have its special rarity and traits providing a secure certification of authenticity",
      ],
      btnTitle: "SEE MORE",
      image: "/sphere5.png",
      state: false,
    },
  ];
  const [showMore, setShowMore] = useState(false);
  const [UserData, setUserData] = useState(grids);

  const classes = useStyles();
  const handlerCard = (id) => {
    const NewArray = UserData.map((e, index) => {
      if (id === index) {
        e.state = true;
        return e;
      }
      e.state = false;
      return e;
    });
    setUserData([...NewArray]);
  };
  const handlerCardless = (id) => {
    const NewArray = UserData.map((e, index) => {
      if (id === index) {
        e.state = false;
        return e;
      }
      e.state = false;
      return e;
    });
    setUserData([...NewArray]);
  };

  return (
    <>
      <Grid
        container
        md={12}
        lg={12}
        // display={"flex"}
        sx={{ paddingTop: { md: "140px", xs: "30px" } }}
      >
        <Grid
          item
          container
          md={12}
          sm={12}
          xs={12}
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: { md: "100px", lg: "100px", sm: "50px", xs: "0px" },
            paddingRight: { md: "100px", lg: "100px", sm: "50px", xs: "0px" },
          }}
          // sx={{ paddingX: "70px", paddingY: "20px" }}
        >
          {UserData?.map((grid, index) => (
            <>
              {console.log(grid.image)}
              <Grid item md={4} sm={6} xs={12} sx={{ marginBottom: "100px" }}>
                <Card
                  className={classes.card}
                  sx={{
                    backgroundColor: "#04212b",
                    borderRadius: "18px",
                    position: "relative",
                  }}
                >
                  <img src={grid.img} />
                  {/* <Typography>
                    <img
                      src={grid.image}
                      style={
                        index === 0
                          ? {
                              position: "absolute",
                              bottom: "0",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 1
                          ? {
                              position: "absolute",
                              bottom: "-4%",
                              right: "-25%",
                              maxWidth: "100%",
                              height: "auto",
                              background: "transparent",
                            }
                          : index === 2
                          ? {
                              position: "absolute",
                              bottom: "-1%",
                              right: "4%",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 3
                          ? {
                              position: "absolute",
                              bottom: "-3%",
                              left: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 4
                          ? {
                              position: "absolute",
                              bottom: "-3%",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : index === 5
                          ? {
                              position: "absolute",
                              bottom: "-1%",
                              right: "0",
                              maxWidth: "100%",
                              height: "auto",
                            }
                          : {}
                      }
                    />
                  </Typography> */}
                  <CardContent>
                    <Typography>
                      <img
                        src={grid.image}
                        style={
                          index === 0
                            ? {
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 1
                            ? {
                                position: "absolute",
                                bottom: "-4%",
                                right: "-25%",
                                maxWidth: "100%",
                                height: "auto",
                                background: "transparent",
                              }
                            : index === 2
                            ? {
                                position: "absolute",
                                bottom: "-1%",
                                right: "4%",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 3
                            ? {
                                position: "absolute",
                                bottom: "-3%",
                                left: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 4
                            ? {
                                position: "absolute",
                                bottom: "-3%",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : index === 5
                            ? {
                                position: "absolute",
                                bottom: "-1%",
                                right: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }
                            : {}
                        }
                      />
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          width: "100%",
                        }}
                      >
                        {grid.vision}
                      </Typography>
                      <Typography
                        sx={{
                          height: "1px",
                          backgroundColor: "#fff",
                          width: "100%",
                        }}
                      ></Typography>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "28px",
                      }}
                    >
                      {grid.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4efd93",
                        fontWeight: "bold",
                        fontSize: "28px",
                      }}
                    >
                      {grid.subtitle}
                    </Typography>

                    {grid.state
                      ? grid?.description?.map((des, index) => (
                          <>
                            <br />
                            <br />
                            <Typography sx={{ color: "#fff" }}>
                              {des}
                            </Typography>
                          </>
                        ))
                      : grid?.description?.map((des, index) => (
                          <>
                            {index <= 1 && (
                              <Typography sx={{ color: "#fff" }}>
                                {des}
                              </Typography>
                            )}
                          </>
                        ))}

                    {grid.btnTitle && (
                      <>
                        {grid.state ? (
                          <Btn
                            title='Show less'
                            onClick={() => handlerCardless(index)}
                            style={{
                              position: "absolute",
                              bottom: "2%",

                              width: "75%",
                            }}
                          />
                        ) : (
                          <Btn
                            title='Show more'
                            // onClick={() => setShowMore(!showMore)}
                            onClick={() => handlerCard(index)}
                            style={{
                              position: "absolute",
                              bottom: "2%",
                              width: "75%",
                            }}
                          />
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
      {/* <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          {grids.map((grid) => (
            <Card
              className={classes.card}
              sx={{ backgroundColor: "#04212b", borderRadius: "18px" }}
            >
              <img src={grid.img} />
              <CardContent>
                <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                  {grid.vision}
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "28px" }}
                >
                  {grid.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#4efd93",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  {grid.subtitle}
                </Typography>
                <Typography sx={{ color: "#fff" }}>
                  {grid.description}
                </Typography>
                {grid.btnTitle && <Btn title={grid.btnTitle} />}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid> */}
    </>
  );
};

export default GridSection;
