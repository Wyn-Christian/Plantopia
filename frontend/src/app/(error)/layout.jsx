import { AppBar, Container, Box, Stack, Toolbar, Button } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const ErrorLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#262626" }}>
      <AppBar elevation={0} sx={{ backgroundColor: "#262626" }}>
        <Toolbar>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Navbar Logo"
              width={40}
              height={40}
            />
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Stack
          sx={{
            maxWidth: 400,
            minHeight: "100vh",
            textAlign: "center",
            m: "auto",
            justifyContent: "center",
            py: 12,
          }}
        >
          {children}
          <Button
            variant="contained"
            size="large"
            disableElevation
            LinkComponent={Link}
            href="/"
            sx={{
              textTransform: "unset",
              maxWidth: 150,
              fontWeight: 700,
              alignSelf: "center",
              mt: 4,
            }}
          >
            Go to Home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ErrorLayout;
