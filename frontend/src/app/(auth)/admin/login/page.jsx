"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

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
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Stack sx={{ minHeight: "100vh", flexDirection: "row" }}>
        <Typography
          variant="inherit"
          component={Link}
          href="/"
          display="contents"
          sx={{ textDecoration: "none" }}
        >
          <Box
            m={{ xs: 2, md: 5 }}
            sx={{
              display: "inline-flex",
              zIndex: 9,
              position: "absolute",
            }}
          >
            <Image
              src="/assets/dark-logo.svg"
              alt="Navbar Logo"
              width={45}
              height={45}
            />
          </Box>
        </Typography>
        <Stack
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            background:
              "linear-gradient(rgb(22 36 27 / 94%), rgb(22 32 36 / 94%)) center center/cover no-repeat,url(/assets/overlay_2.jpg)",
            backgroundPosition: "center center",
          }}
        >
          <Typography variant="h3" textAlign="center" maxWidth={480}>
            Hi, Welcome back!
          </Typography>
          <Image
            style={{
              width: "100%",
              maxWidth: 400,
              display: "inline-block",
            }}
            alt="Dashboard Illustration"
            src="/assets/dashboard-illustration.svg"
            width={150}
            height={400}
          />
        </Stack>

        <Stack
          sx={{
            width: "100%",
            mx: "auto",
            maxWidth: 480,
            p: {
              xs: "120px 16px",
              md: "160px 64px 0px",
            },
          }}
        >
          <Typography variant="h4" mb={5}>
            Sign in as admin
          </Typography>
          <Box component="form">
            <Stack gap={2.5}>
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

              <Typography
                variant="body2"
                sx={{
                  textDecoration: "underline",
                  alignSelf: "flex-end",
                  color: "inherit",
                }}
                component={Link}
                href="/forgot-password"
              >
                Forgot Password?
              </Typography>

              <Button
                variant="contained"
                sx={{
                  textTransform: "unset",
                  fontWeight: 700,
                  fontSize: 15,
                  height: 48,
                }}
                component={Link}
                href="/admin"
              >
                Login
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default AdminLoginPage;
