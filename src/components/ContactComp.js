import React from "react";
import useStyles from "../styles";
import Btn from "./Btn";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactComp = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required field"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {/* <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          //   borderRadius: "20px",
        }}
      >
        <TextField
          fullWidth
          placeholder="Name"
          id="fullWidth"
          sx={{
            backgroundColor: "#04212b",
            color: "#9c9d9d",
            border: "none !important",
            borderColor: "transparent",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        />
        <TextField
          fullWidth
          placeholder="Email"
          id="fullWidth"
          sx={{
            backgroundColor: "#04212b",
            color: "#9c9d9d",
            border: "none !important",
            borderColor: "transparent",
            borderRadius: "20px",

            marginBottom: "20px",
          }}
        />
        <TextField
          fullWidth
          placeholder="Message"
          id="fullWidth"
          sx={{
            backgroundColor: "#04212b",
            color: "#9c9d9d",
            border: "none !important",
            borderColor: "transparent",
            borderRadius: "20px",
            height: "140px",
            marginBottom: "-50px",
          }}
        />
        <Btn title="SEND MESSAGE" />
      </Box> */}
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          placeholder='Name'
          style={{
            width: "400px ",
            backgroundColor: "#04212b",
            borderRadius: "15px",
            border: "none",
            padding: "20px",
            marginBottom: "10px",
            color: "#fff",
          }}
        />
        <input
          placeholder='Email'
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            width: "400px ",
            backgroundColor: "#04212b",
            borderRadius: "15px",
            border: "none",
            padding: "20px",
            marginBottom: "10px",
            color: "#fff",
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <input
          placeholder='Message'
          style={{
            width: "400px",
            backgroundColor: "#04212b",
            borderRadius: "15px",
            border: "none",
            padding: "20px",
            height: "100px",
            marginBottom: "-85px",
            color: "#fff",
          }}
        />
        <Btn title='SEND MESSAGE' type='submit' />
      </form>
    </>
  );
};

export default ContactComp;
