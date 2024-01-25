import { Box, Paper, Stack } from "@mui/material";

const layout = ({ children }) => {
  return (
    <Stack minHeight="100vh" direction="row" position="relative">
      <Stack
        flexGrow={1}
        sx={{ width: "100%", mx: "auto", maxWidth: 480, px: { xs: 2, md: 8 } }}
      >
        <Box
          component="img"
          src="/assets/mini-logo.svg"
          alt="Plantopia mini logo"
          sx={{
            width: 45,
            height: 45,
            mt: { xs: 4, md: 8 },
            mb: { xs: 10, md: 8 },
            borderRadius: 1,
          }}
        />
        <Paper
          elevation={3}
          sx={{
            boxShadow: { md: "none" },
            backgroundImage: { md: "none" },
            py: { xs: 5, md: 0 },
            px: { xs: 3, md: 0 },
          }}
        >
          {children}
        </Paper>
      </Stack>

      <Stack
        sx={{
          flexGrow: 1,
          position: "relative",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src="/assets/auth_pic.jpeg"
          alt="Navbar Logo"
          sx={{
            objectFit: "cover",
            position: "absolute",
            top: 16,
            left: 16,
            width: "calc(100% - 32px)",
            height: "calc(100% - 32px)",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default layout;
