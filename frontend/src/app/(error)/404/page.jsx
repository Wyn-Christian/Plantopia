import { Box, Typography } from "@mui/material";
import Image from "next/image";

const NotFoundErrorPage = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Sorry, Page Not Found!
      </Typography>
      <Typography variant="body1" color="rgb(145, 158, 171)">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <Image
        layout="responsive"
        src="/assets/404-illustration.svg"
        width={300}
        height={300}
      />
    </Box>
  );
};

export default NotFoundErrorPage;
