import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  CardMedia,
  Divider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Improved product initialization to handle all potential image formats
  const product = state?.product ? {
    ...state.product,
    // Ensure image is always an array by handling all possible cases
    image: state.product.image ? 
      (typeof state.product.image === 'string' ? 
        [state.product.image] : 
        Array.isArray(state.product.image) ? 
          state.product.image : 
          []
      ) : []
  } : null;

  const [mainImage, setMainImage] = useState("");

  // Set main image when product loads or changes
  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Product details not found!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
          onClick={() => navigate("/")}
        >
          Go Back to Store
        </Button>
      </Box>
    );
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Set clicked image as the main image
  };

  return (
    <Box sx={{ p: 5, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {/* Main Product Image */}
          {product.image && product.image.length > 0 ? (
            <>
              <CardMedia
                component="img"
                image={mainImage} // Use the mainImage state for large image
                alt={product.title}
                sx={{
                  height: 400,
                  mb: 2,
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  objectFit: "contain",
                  backgroundColor: "white",
                  p: 2,
                }}
              />
              <Grid container spacing={2}>
                {/* Thumbnail Images - Only show if there are multiple images */}
                {product.image.length > 1 && 
                  product.image
                    .filter((img) => img !== mainImage) // Filter out the main image from thumbnails
                    .map((img, index) => (
                      <Grid item xs={6} key={index}>
                        <CardMedia
                          component="img"
                          image={img}
                          alt={`${product.title} image ${index + 2}`}
                          sx={{
                            height: 200,
                            cursor: "pointer",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            objectFit: "contain",
                            backgroundColor: "white",
                            p: 2,
                          }}
                          onClick={() => handleThumbnailClick(img)} // Update the main image
                        />
                      </Grid>
                    ))}
              </Grid>
            </>
          ) : (
            <Typography variant="body1" color="textSecondary">
              No images available for this product.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              p: 4,
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* Product Title and Price */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {product.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "#1a1a1a",
                fontWeight: "600",
              }}
            >
              {product.price}
            </Typography>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                const savedCart = localStorage.getItem("cart");
                const currentCart = savedCart
                  ? JSON.parse(savedCart)
                  : [];
                const isAlreadyInCart = currentCart.some(
                  (item) => item.id === product.id
                );

                if (!isAlreadyInCart) {
                  const updatedCart = [...currentCart, product];
                  localStorage.setItem("cart", JSON.stringify(updatedCart));
                  alert("Product added to cart!");
                  navigate("/Cart");
                } else {
                  alert("Product is already in the cart!");
                }
              }}
              sx={{
                mb: 4,
                backgroundColor: "black",
                color: "white",
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              Add to Cart
            </Button>

            <Divider sx={{ my: 3 }} />

            {/* Product Specifications */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Specifications
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
              {product.specifications}
            </Typography>

            {product.longSpecifications && (
              <>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, mt: 4 }}>
                  Detailed Specifications
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
                  {product.longSpecifications}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;