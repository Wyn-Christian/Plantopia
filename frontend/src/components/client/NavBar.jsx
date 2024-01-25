"use client";
import {
  Container,
  AppBar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import MobileNavBar from "./MobileNavBar";

const landingPages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Us",
    route: "/about-us",
  },

  {
    title: "Products",
    route: "/products",
  },
];

const authPages = [
  {
    title: "Login",
    route: "/login",
  },
  {
    title: "Sign Up",
    route: "/sign-up",
  },
  {
    title: "Admin",
    route: "/admin/login",
  },
];

const NavBar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger || "unset",
        py: trigger ? 0 : 2,
        transition: "padding 0.23s ease",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Image
            src="/assets/dark-logo.svg"
            alt="Navbar Logo"
            width={45}
            height={45}
          />

          <Box
            sx={{ flexGrow: 1 }}
            display={{ xs: "none", md: "inline-block" }}
          >
            {landingPages.map((page) => (
              <Button
                key={page.title}
                LinkComponent={Link}
                href={page.route}
                sx={{ my: 2, color: "white" }}
                disableRipple
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box display={{ xs: "none", md: "inline-block" }}>
            {authPages.map((page) => (
              <Button
                key={page.title}
                LinkComponent={Link}
                href={page.route}
                sx={{ my: 2, color: "white" }}
                disableRipple
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <MobileNavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
