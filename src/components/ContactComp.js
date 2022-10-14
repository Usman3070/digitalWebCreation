import React from "react";
import Btn from "./Btn";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextareaAutosize, TextField } from "@mui/material";

const ContactComp = () => {
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
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            //   borderRadius: "20px",
          }}
        >
          <TextField
            fullWidth
            placeholder='Name'
            id='fullWidth'
            sx={{
              backgroundColor: "#04212b",
              border: "none !important",
              borderColor: "transparent",
              // borderRadius: "20px",
              marginBottom: "20px",
              width: { md: "100%", sm: "80%", xs: "70%" },
            }}
          />
          <TextField
            fullWidth
            placeholder='Email'
            id='fullWidth'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            sx={{
              backgroundColor: "#04212b",
              marginBottom: "20px",
              width: { md: "100%", sm: "80%", xs: "70%" },
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <TextField
            placeholder='Message'
            multiline
            rows={3}
            maxRows={4}
            sx={{
              backgroundColor: "#04212b",
              width: { md: "100%", sm: "80%", xs: "70%" },
            }}
          />
          {/* <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            placeholder='Message'
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#04212b",
              color: "#fff",
            }}
          /> */}
          <Button
            sx={{
              backgroundColor: "#4efd93",
              padding: "18px",
              width: { md: "100%", sm: "80%", xs: "70%" },
              borderRadius: "16px",
              color: "#fff",
              fontWeight: "bold",
              mt: "110px",
            }}
          >
            SEND MESSAGE
          </Button>
        </Box>
      </form>
      {/* <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          placeholder='Name'
          style={{
            width: "70% ",
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
            width: "70% ",
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
      </form> */}
    </>
  );
};

export default ContactComp;
