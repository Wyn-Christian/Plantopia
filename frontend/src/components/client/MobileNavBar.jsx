"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Nav = ({ title, route, toggleDrawer }) => {
  const pathname = usePathname();
  let isActive = pathname == route;
  return (
    <Box>
      <Button
        LinkComponent={Link}
        href={route}
        sx={{
          color: isActive ? "#1976d2" : "unset",
          bgcolor: isActive ? "#1976d21a" : "transparent",
          textDecoration: "none",
          textTransform: "unset",
          justifyContent: "flex-start",
          fontWeight: 400,
          borderRadius: "5px",
          p: isActive ? "12px" : "12px 0",
        }}
        size="large"
        fullWidth
        onClick={toggleDrawer(false)}
      >
        {title}
      </Button>
    </Box>
  );
};

const Subnav = ({ title, subroutes, toggleDrawer }) => {
  const pathname = usePathname();
  let isActive = subroutes.some((subroute) => subroute.route == pathname);

  return (
    <Box>
      <Accordion
        sx={{ bgcolor: "transparent" }}
        elevation={0}
        disableGutters
        defaultExpanded={isActive}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ p: 0, color: isActive ? "#1976d2" : "unset" }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Grid container sx={{ "& .MuiGrid2-root": { pl: 2, pt: 1 } }}>
            {subroutes.map((subroute) => (
              <Grid xs={12}>
                <Button
                  LinkComponent={Link}
                  href={subroute.route}
                  sx={{
                    color: subroute.route == pathname ? "#1976d2" : "unset",
                    bgcolor:
                      subroute.route == pathname ? "#1976d21a" : "transparent",
                    textDecoration: "none",
                    textTransform: "unset",
                    justifyContent: "flex-start",
                    fontWeight: 400,
                    borderRadius: "5px",
                  }}
                  size="large"
                  fullWidth
                  onClick={toggleDrawer(false)}
                >
                  {subroute.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <Box
      flexGrow={1}
      textAlign="right"
      sx={{ display: { xs: "inline-block", md: "none" } }}
    >
      <Button
        variant="outlined"
        sx={{ p: 1, fontWeight: 400, minWidth: "auto" }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 280,
          },
        }}
      >
        <Box p={1} height="100%">
          <Stack
            width="100%"
            p="8px 16px"
            direction="row"
            alignItems="center"
            gap={1}
          >
            <Image
              src="/assets/dark-logo.svg"
              alt="Navbar Logo"
              width={45}
              height={45}
            />
            <Typography typography="h5" letterSpacing={1.5} fontWeight="bold">
              PhilSA
            </Typography>
          </Stack>

          <Box p={2}>
            <Nav title="Home" route="/" toggleDrawer={toggleDrawer} />
            <Nav title="About" route="/about-us" toggleDrawer={toggleDrawer} />

            <Nav
              title="Products"
              route="/products"
              toggleDrawer={toggleDrawer}
            />
          </Box>
          <Divider />

          <Stack mt={1} gap={1}>
            <Button
              LinkComponent={Link}
              href="/login"
              fullWidth
              variant="contained"
              onClick={toggleDrawer(false)}
            >
              Login
            </Button>
            <Button
              LinkComponent={Link}
              href="/sign-up"
              fullWidth
              variant="outlined"
              onClick={toggleDrawer(false)}
            >
              Sign Up
            </Button>
            <Typography
              component={Link}
              href="/admin/login"
              variant="caption"
              textAlign="right"
              sx={{
                color: "inherit",
              }}
              onClick={toggleDrawer(false)}
            >
              Login as Admin
            </Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavBar;
