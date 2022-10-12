import { Button } from "@mui/material";
import React from "react";
import useStyles from "../styles";
const Btn = (props) => {
  const classes = useStyles();
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#4efd93",
          padding: "18px",
          width: "100%",
          borderRadius: "16px",
          color: "#fff",
          fontWeight: "bold",
          mt: "110px",
        }}
        onClick={props.onClick}
        style={props.style}
        type={props.type}
        variant='contained'
      >
        {props.title}
      </Button>
    </>
  );
};

export default Btn;
