import Link from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import PHPPrice from "@/utils/PHPPrice";

const ProductCard = ({ name, img_url, id, price, isWishlist = false }) => {
  return (
    <Grid xs={6} sm={4} md={3}>
      {/* <Box>
        <Card
          elevation={0}
          sx={{
            width: { xs: 300, sm: 250, md: 120 },

            m: { xs: "auto", md: 0 },
          }}
        >
          <CardMedia
            sx={{
              bgcolor: "primary.main",
            }}
          >
            <IconButton
              // onClick={handleFavoriteButton}
              sx={{
                top: "70%",
                left: 11,
                backgroundColor: "secondary.main",
                backgroundSize: "contain",
                boxShadow: "1px 1px 3px #eee",
                zIndex: 9,
                position: "inlin"
              }}
              disableRipple
            >
              {isWishlist ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Box
              component="img"
              src="/samples/product.png"
              sx={{ width: "100%" }}
            />
          </CardMedia>
          <CardActionArea LinkComponent={Link} href={`/products`}>
            <CardContent sx={{ p: 1 }}>
              <Typography fontWeight="bold">{name}</Typography>
              <Typography variant="caption">
                {PHPPrice.format(price)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box> */}
      <Stack sx={{ position: "relative" }}>
        <Box sx={{ position: "relative", mb: 2 }}>
          <Fab
            size="small"
            color="primary"
            sx={{
              "&:hover": { opacity: 1 },
              opacity: 0,
              right: 8,
              bottom: 8,
              position: "absolute",
              zIndex: 9,
            }}
          >
            <AddShoppingCartOutlinedIcon />
          </Fab>
          <Box
            component="span"
            sx={{
              overflow: "hidden",
              position: "relative",
              verticalAlign: "bottom",
              display: "inline-block",
              borderRadius: 1.5,
              bgcolor: "#919eab1f",
            }}
          >
            <Box
              component="img"
              src="/samples/product.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                verticalAlign: "bottom",
                display: "inline-block",
              }}
            />
          </Box>
        </Box>
        <Stack gap={0.5}>
          <Typography
            variant="caption"
            fontWeight={500}
            sx={{ color: "#637381" }}
          >
            Category
          </Typography>
          <MUILink underline="hover" component={Link} href={`/products/123`}>
            <Typography variant="body2" fontWeight={500}>
              Sample Product
            </Typography>
          </MUILink>
          <Typography variant="body1" fontWeight={600}>
            {PHPPrice.format(1234.23)}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ProductCard;
