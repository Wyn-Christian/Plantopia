import { Box, Typography } from "@mui/material";
import Image from "next/image";

const NotFoundErrorPage = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        500 Internal Server Error
      </Typography>
      <Typography variant="body1" color="rgb(145, 158, 171)">
        There was an error, please try again later.
      </Typography>
      <Image
        layout="responsive"
        src="/assets/500-illustration.svg"
        width={300}
        height={300}
      />
    </Box>
  );
};

export default NotFoundErrorPage;
