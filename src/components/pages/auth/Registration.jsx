import React from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      Name: data.get("name"),
      Email: data.get("email"),
      Password: data.get("password"),
      Confirm_Password: data.get("confirm-password"),
      tc: data.get("tc"),
    };
    if (
      actualData.Name &&
      actualData.Email &&
      actualData.Password &&
      actualData.Confirm_Password &&
      actualData.tc !== null
    ) {
      if (actualData.Password === actualData.Confirm_Password) {
        // console.log(actualData);

        document.getElementById("registration-form").reset();
        setError({ status: true, msg: "Registration Successful", type: "success" });
          navigate('/login')
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          type="password"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="agree"
              color="primary"
              name="tc"
              id="tc"
              sx={{ ml: 2 }}
            />
          }
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>

        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Registration;
