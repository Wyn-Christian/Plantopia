import { Box, Container } from "@mui/material";

import NavBar from "@/components/client/NavBar";
import Footer from "@/components/client/Footer";

const layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </Box>
  );
};

export default layout;
