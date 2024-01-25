import { Box, Typography } from "@mui/material";
import Image from "next/image";

const UnauthorizedErrorPage = () => {
  return (
    <Box>
      <Typography variant="h3" mb={2}>
        No Permission
      </Typography>
      <Typography variant="body1" color="rgb(145, 158, 171)">
        The page you're trying access has restricted access. Please refer to
        your system administrator
      </Typography>
      <Image
        layout="responsive"
        src="/assets/403-illustration.svg"
        width={300}
        height={300}
      />
    </Box>
  );
};

export default UnauthorizedErrorPage;
