import { Box, Typography } from "@mui/material";
import React from "react";
import ContactComp from "./ContactComp";
const Contact = () => {
  return (
    <section id='contact'>
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
        CONTACT US
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
        GET IN TOUCH
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { md: "100%", sm: "60%", xs: "40%" },
        }}
      >
        <ContactComp />
      </Box>
    </section>
  );
};

export default Contact;
