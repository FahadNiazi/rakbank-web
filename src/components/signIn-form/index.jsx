import {
  Box,
  Button,
  CircularProgress,
  Divider,
  InputBase,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import React, { useState } from "react";
import { styles } from "./styles";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setSubmitting(true);
    axios
      .get(
        `https://61e7ec0de32cd90017acbea1.mockapi.io/api/v1/login?username=${username}&email=${email}&password=${password}`
      )
      .then(() => {
        setSubmitting(false);
        alert("Logged in successfully");
      });
  };

  return (
    <Box>
      <Box style={styles.singIn}>Sign in to Travelguru</Box>
      <Box style={styles.displayFlex}>
        <Box style={styles.signUp}>Don't have an account? </Box>{" "}
        <Box style={styles.signUpColor}>Signup</Box>
      </Box>

      <Divider style={styles.divider} />
      <InputBase
        placeholder="Full Name"
        fullWidth
        style={styles.inputBaseStyling}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <InputBase
        placeholder="Email"
        fullWidth
        style={styles.inputBaseStyling}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <InputBase
        placeholder="Password"
        fullWidth
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={styles.inputBaseStyling}
        type={showPassword ? "password" : "text"}
        endAdornment={
          <InputAdornment onClick={() => setShowPassword(!showPassword)}>
            <IconButton>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <Box my={3}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          style={styles.borderRadius}
          disabled={
            password.length < 8 ||
            !validateEmail(email) ||
            username.length < 3 ||
            submitting
          }
          onClick={handleSubmit}
        >
          <Box display="flex">
            <Box>Continue</Box>
            {submitting && (
              <Box ml={2}>
                <CircularProgress size="20px" />
              </Box>
            )}
          </Box>
        </Button>
      </Box>
      <Divider />
    </Box>
  );
};
