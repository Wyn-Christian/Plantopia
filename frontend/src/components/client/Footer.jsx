import Image from "next/image";

import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const Footer = () => {
  return (
    <Box>
      <Divider />
      <Container sx={{ pt: 10, pb: 5, px: { xs: 2, sm: 3 } }}>
        <Box textAlign={{ xs: "center", md: "unset" }}>
          <Image
            style={{ borderRadius: 4 }}
            src="/assets/mini-logo.svg"
            alt="Navbar Logo"
            width={45}
            height={45}
          />
        </Box>
        <Grid
          container
          sx={{ mt: 3 }}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Grid xs={8} md={3} textAlign={{ xs: "center", md: "left" }}>
            Growing greener futures with every plant – Plantopia, where dreams
            blossom.
          </Grid>
          <Grid xs={12} md={6}>
            <Stack
              direction={{ md: "row" }}
              gap={5}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Stack gap={2} width="100%" mt={{ xs: 2, md: 0 }}>
                <Typography fontWeight="bold" textTransform="uppercase">
                  Company
                </Typography>
                <Typography
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  href={"/"}
                >
                  Home
                </Typography>
                <Typography
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  href={"/about-us"}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  href={"/products"}
                >
                  Products
                </Typography>
              </Stack>

              <Stack gap={2} width="100%">
                <Typography fontWeight="bold" textTransform="uppercase">
                  Contact
                </Typography>
                <Typography>plantopia@tup.edu.ph</Typography>
                <Typography>+631 2345 67 89</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography mt={10}>©2023. All rights reserved</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
