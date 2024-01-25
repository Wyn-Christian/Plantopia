import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CategoryFilter from "@/components/client/CategoryFilter";

import ProductCard from "@/components/client/ProductCard";

const ProductsPage = () => {
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
          <Typography variant="h1" align="center" gutterBottom fontWeight={700}>
            Products
          </Typography>
        </Box>
      </Box>
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            py: 5,
          }}
        >
          <Typography variant="h3">Catalog</Typography>

          <Button
            variant="contained"
            sx={{
              display: {
                md: "none",
              },
              background: "white",
              color: "#212b36",
              boxShadow: "none",
            }}
            startIcon={<FilterAltOutlinedIcon />}
          >
            Filters
          </Button>
        </Stack>

        <Stack direction="row">
          <CategoryFilter />
          <Box sx={{ flexGrow: 1, pl: { md: 8 } }}>
            <Grid
              container
              sx={{ width: "100%" }}
              justifyContent="flex-start"
              spacing={2}
            >
              <ProductCard name="Sample Product" price={1200} />
              <ProductCard name="Sample Product" price={1200} />
              <ProductCard name="Sample Product" price={1200} />
              <ProductCard name="Sample Product" price={1200} />
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsPage;
