import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import { Favorite, ShoppingCart } from "@mui/icons-material";

interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string[];  // Updated to match ProductDetails interface
  specifications?: string;
  longSpecifications?: string;
}

const Wish: React.FC = () => {
  const [wishlist, setWishlist] = useState<ProductItem[]>([]);
  const [cart, setCart] = useState<ProductItem[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    const savedCart = localStorage.getItem("cart");
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const handleRemoveFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product: ProductItem) => {
    if (!cart.some((item) => item.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart successfully!");
    } else {
      alert("Product is already in cart!");
    }
    handleRemoveFromWishlist(product.id);
  };

  const toggleWishlist = (product: ProductItem) => {
    if (wishlist.some((item) => item.id === product.id)) {
      handleRemoveFromWishlist(product.id);
    }
  };

  return (
    <Box sx={{ marginTop: "2rem", minHeight: "80vh", backgroundColor: "#f5f5f5", py: 4 }}>
      <Container>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center" 
          sx={{ 
            fontWeight: "bold",
            mb: 4,
            color: "#1a1a1a"
          }}
        >
          My Wishlist
        </Typography>
        
        {wishlist.length === 0 ? (
          <Paper 
            sx={{
              boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
              borderRadius: "8px",
              padding: "2rem",
              height: "100%",
              textAlign: "center",
              backgroundColor: "white"
            }}
          >
            <Typography variant="h6" gutterBottom>
              Your wishlist is empty
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                padding: "10px 30px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
              onClick={() => window.location.href = '/store'}
            >
              Continue Shopping
            </Button>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {wishlist.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card 
                  sx={{ 
                    position: "relative", 
                    boxShadow: "0 4px 6px rgba(9, 0, 0, 0.97)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "12px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 12px rgba(9, 0, 0, 0.97)",
                    },
                  }}
                >
                  <IconButton
                    onClick={() => toggleWishlist(product)}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "red",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    <Favorite />
                  </IconButton>
                  
                  <CardMedia 
                    component="img" 
                    height="200" 
                    image={product.image[0]} // Use first image from array
                    alt={product.title}
                    sx={{
                      p: 2,
                      objectFit: "contain",
                      backgroundColor: "white",
                    }}
                  />
                  
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: "500",
                        fontSize: "1.1rem",
                        lineHeight: 1.3,
                        mb: 1
                      }}
                    >
                      {product.title}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: "#00ff00",
                        fontWeight: "bold"
                      }}
                    >
                      {product.price}
                    </Typography>
                    
                    <Button
                      variant="contained"
                      onClick={() => handleAddToCart(product)}
                      fullWidth
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: "auto",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Wish;