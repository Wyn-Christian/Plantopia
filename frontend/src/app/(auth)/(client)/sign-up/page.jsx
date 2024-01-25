"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="form">
      <Stack gap={2} mb={5}>
        <Typography variant="h4">Register</Typography>
        <Stack direction="row" gap={0.5}>
          <Typography variant="body2">Already Have an account?</Typography>
          <Typography
            color="primary.main"
            variant="subtitle2"
            sx={{ textDecoration: "none" }}
            component={Link}
            href="/login"
          >
            Sign In
          </Typography>
        </Stack>
      </Stack>
      <Stack gap={2.5}>
        <Stack direction="row" gap={3}>
          <TextField label="First Name" name="first_name" />
          <TextField label="Last Name" name="last_name" />
        </Stack>
        <TextField label="Email Address" name="email-address" />

        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="re-password">Re-enter Password</InputLabel>
          <OutlinedInput
            id="re-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="re-password"
          />
        </FormControl>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            justifyContent: "space-between",
            textTransform: "unset",
            fontWeight: 700,
            fontSize: 15,
            height: 48,
          }}
        >
          Create Account
        </Button>
        <Typography
          variant="body2"
          sx={{
            textDecoration: "underline",
            color: "inherit",
          }}
          component={Link}
          href="/"
        >
          Back to Home
        </Typography>
      </Stack>
    </Box>
  );
};

export default RegisterPage;
