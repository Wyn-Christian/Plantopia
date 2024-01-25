import { Box, Typography } from "@mui/material";

const Home = () => {
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
              variant="h1"
              align="center"
              gutterBottom
              fontWeight={700}
            >
              Welcome to Plantopia
            </Typography>

            <Typography variant="h6" align="center" color="rgb(174, 176, 180)">
              Nurture your space with our curated collection of plants—where
              every bloom fuels your green dreams.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
