import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(14deg, rgba(13,13,13,1) 35%, rgba(55,78,71,1) 100%);",
          pt: 13,
          mt: -13,
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: 720,
              md: 1236,
            },
            width: "100%",
            m: "0px auto",
            py: {
              xs: 4,
              sm: 6,
              md: 9,
            },
            px: 2,
          }}
        >
          <Box>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              color="rgb(174, 176, 180)"
              textTransform="uppercase"
            >
              About Us
            </Typography>

            <Typography
              variant="h2"
              align="center"
              gutterBottom
              fontWeight={700}
            >
              Unearth Plantopia's Roots
            </Typography>

            <Typography variant="h6" align="center" color="rgb(174, 176, 180)">
              Explore our dedication to greenery and growth, where your
              botanical dreams take shape.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
