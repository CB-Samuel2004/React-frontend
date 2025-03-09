import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Snackbar,
  IconButton,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Imported images
import l1 from "../images/l/l1/1.jpg";
import l2 from "../images/l/l2/1.jpg";
import l3 from "../images/l/l3/1.jpg";
import l4 from "../images/l/l4/1.jpg";
import m1 from "../images/m/l1/1.jpg";
import m2 from "../images/m/l2/1.jpg";
import m3 from "../images/m/l3/1.jpg";
import m4 from "../images/m/l4/1.jpg";
import t1 from "../images/t/l1/1.jpg";
import t2 from "../images/t/l2/1.jpg";
import t3 from "../images/t/l3/1.jpg";
import t4 from "../images/t/l4/1.jpg";
import a1 from "../images/a/l1/1.jpg";
import a2 from "../images/a/l2/1.jpg";
import a3 from "../images/a/l3/1.jpg";
import a4 from "../images/a/l4/1.jpg";

import acer from "../images/home/acer.jpg";
import dell from "../images/home/dell.jpg";
import hp from "../images/home/hp.jpg";
import lenova from "../images/home/lenova.jpg";
import moto from "../images/home/moto.jpg";
import samsung from "../images/home/samsung.jpg";
import redmi from "../images/home/Redmi.jpg";
import nothing from "../images/home/nothing.jpg";
import zeb from "../images/home/zeb.jpg";
import plus from "../images/home/1+.jpg";
import boat from "../images/home/boat.jpg";
import noise from "../images/home/noise.jpg";

import bg from "../images/home/bg1.jpg";

// Create a mapping of image paths to actual image imports
const imageMap = {
  // Laptops
  "../images/l/l1/1.jpg": l1,
  "../images/l/l2/1.jpg": l2,
  "../images/l/l3/1.jpg": l3,
  "../images/l/l4/1.jpg": l4,
  // Mobiles
  "../images/m/l1/1.jpg": m1,
  "../images/m/l2/1.jpg": m2,
  "../images/m/l3/1.jpg": m3,
  "../images/m/l4/1.jpg": m4,
  // Tablets
  "../images/t/l1/1.jpg": t1,
  "../images/t/l2/1.jpg": t2,
  "../images/t/l3/1.jpg": t3,
  "../images/t/l4/1.jpg": t4,
  // Accessories
  "../images/a/l1/1.jpg": a1,
  "../images/a/l2/1.jpg": a2,
  "../images/a/l3/1.jpg": a3,
  "../images/a/l4/1.jpg": a4,
  // Brand logos
  "../images/home/acer.jpg": acer,
  "../images/home/dell.jpg": dell,
  "../images/home/hp.jpg": hp,
  "../images/home/lenova.jpg": lenova,
  "../images/home/moto.jpg": moto,
  "../images/home/samsung.jpg": samsung,
  "../images/home/Redmi.jpg": redmi,
  "../images/home/nothing.jpg": nothing,
  "../images/home/zeb.jpg": zeb,
  "../images/home/1+.jpg": plus,
  "../images/home/boat.jpg": boat,
  "../images/home/noise.jpg": noise,
};

const Store = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const laptopsRef = useRef(null);
  const mobilesRef = useRef(null);
  const tabletsRef = useRef(null);
  const accessoriesRef = useRef(null);

  const products = {
    laptops: [
      {
        id: 1,
        title: "Dell [Smartchoice] Core i3-1215U, 12th Gen",
        price: "₹34,990",
        image: l1,
        imagePath: "../images/l/l1/1.jpg",
        specifications: "8GB RAM / 512GB SSD / FHD / Windows 11",
      },
      {
        id: 2,
        title: "Acer ALG Gaming Laptop 13th Gen Intel Core i7",
        price: "₹69,990",
        image: l2,
        imagePath: "../images/l/l2/1.jpg",
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home ",
      },
      {
        id: 3,
        title: "Lenovo V14 G3 (2024), Intel Core i5 12th Gen",
        price: "₹38,189",
        image: l3,
        imagePath: "../images/l/l3/1.jpg",
        specifications:
          "16GB/512GB SSD/Intel UHD Graphics/Windows 11/ Thin and Light Business Laptop/14.0",
      },
      {
        id: 4,
        title: "HP 15 Intel Core i5 13th Gen",
        price: "₹69,990",
        image: l4,
        imagePath: "../images/l/l4/1.jpg",
        specifications:
          "(16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office/Backlit Kb/15.6",
      },
    ],
    mobiles: [
      {
        id: 9,
        title: "Samsung Galaxy S23 Ultra 5G",
        price: "₹72,999",
        specifications:
          "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)",
        image: m1,
        imagePath: "../images/m/l1/1.jpg",
      },
      {
        id: 10,
        title: "Redmi Note 13 5G",
        price: " ₹15,175",
        specifications: "(Chromatic Purple, 8GB RAM, 256GB Storage)",
        image: m2,
        imagePath: "../images/m/l2/1.jpg",
      },
      {
        id: 11,
        title: "Motorola Edge 50 Fusion 5G ",
        price: " ₹26,428",
        specifications: "(Hot Pink, 12GB RAM, 256GB Storage)",
        image: m3,
        imagePath: "../images/m/l3/1.jpg",
      },
      {
        id: 12,
        title: "Nothing Phone (2a) Plus",
        price: "34,428",
        specifications:
          "8GB RAM, 256GB Storage,Up to 16GB RAM,Dimensity 7350 Pro 5G Processor",
        image: m4,
        imagePath: "../images/m/l4/1.jpg",
      },
    ],
    tablets: [
      {
        id: 17,
        title: "HONOR Pad 9",
        price: "₹22,999",
        specifications: "12.1-Inch 2.5K Display, 8GB, 256GB Storage, Snapdragon 6 Gen 1",
        image: t1,
        imagePath: "../images/t/l1/1.jpg",
      },
      {
        id: 18,
        title: "OnePlus Pad Go",
        price: "₹21,998",
        specifications: " Dolby Atmos Quad Speakers, 4G LTE(Calling) , 8GB RAM 128 GB",
        image: t2,
        imagePath: "../images/t/l2/1.jpg",
      },
      {
        id: 19,
        title: "Lenovo Tab M11",
        price: " ₹13,999",
        specifications: " 4 GB RAM, 128 GB ROM|11 Inch Screen| 90 Hz, 72% NTSC, FHD Display",
        image: t3,
        imagePath: "../images/t/l3/1.jpg",
      },
      {
        id: 20,
        title: "Lenovo Tab Plus ",
        price: "$420",
        specifications: "8 GB RAM, 256 GB ROM| 11.5 Inch, 2K, 90 Hz Refresh",
        image: t4,
        imagePath: "../images/t/l4/1.jpg",
      },
    ],
    accessories: [
      {
        id: 25,
        title: "boAt Airdopes 191",
        price: "₹1,499",
        specifications: "32dB ANC, Ambient Mode, 60HRS Battery, 4Mics ENx, in-Ear Detection,Fast Charge",
        image: a1,
        imagePath: "../images/a/l1/1.jpg",
      },
      {
        id: 26,
        title: "Noise Newly Launched Air Clips ",
        price: "₹2,999",
        specifications: " Wireless Open Ear Earbuds with Chrome Finish, AirWave™ Technology",
        image: a2,
        imagePath: "../images/a/l2/1.jpg",
      },
      {
        id: 27,
        title: "DELL MS3320W Wireless Mouse",
        price: "₹1,749",
        specifications: "4000DPI, up to 36 Month Battery Life, 3Y Advance Exchange Warranty",
        image: a3,
        imagePath: "../images/a/l3/1.jpg",
      },
      {
        id: 28,
        title: "ZEBRONICS K4000MW Wireless Keyboard ",
        price: "₹899",
        specifications: "2 Bluetooth & 2.4 GHz Wireless Connection, Integrated Multimedia Keys",
        image: a4,
        imagePath: "../images/a/l4/1.jpg",
      },
    ],
  };

  const brandLogos = [
    { id: 1, title: "Acer", image: acer, imagePath: "../images/home/acer.jpg" },
    { id: 2, title: "Dell", image: dell, imagePath: "../images/home/dell.jpg" },
    { id: 3, title: "HP", image: hp, imagePath: "../images/home/hp.jpg" },
    { id: 4, title: "Lenovo", image: lenova, imagePath: "../images/home/lenova.jpg" },
    { id: 5, title: "Moto", image: moto, imagePath: "../images/home/moto.jpg" },
    { id: 6, title: "Samsung", image: samsung, imagePath: "../images/home/samsung.jpg" },
    { id: 7, title: "Redmi", image: redmi, imagePath: "../images/home/Redmi.jpg" },
    { id: 8, title: "Nothing", image: nothing, imagePath: "../images/home/nothing.jpg" },
    { id: 9, title: "Zebronics", image: zeb, imagePath: "../images/home/zeb.jpg" },
    { id: 10, title: "One plus", image: plus, imagePath: "../images/home/1+.jpg" },
    { id: 11, title: "Boat", image: boat, imagePath: "../images/home/boat.jpg" },
    { id: 12, title: "Noise", image: noise, imagePath: "../images/home/noise.jpg" },
  ];

  // Function to get all products in a flat array
  const getAllProducts = () => {
    return [
      ...products.laptops,
      ...products.mobiles,
      ...products.tablets,
      ...products.accessories,
    ];
  };

  // Function to restore image references from paths
  const restoreImageReferences = (items) => {
    return items.map(item => {
      // If the item already has an image object, return it as is
      if (typeof item.image !== 'string' && !(item.image instanceof String)) {
        return item;
      }
      
      // Try to find the image using the imagePath
      if (item.imagePath && imageMap[item.imagePath]) {
        return { ...item, image: imageMap[item.imagePath] };
      }
      
      // If no imagePath is found, try to find the product by ID
      const allProducts = getAllProducts();
      const matchingProduct = allProducts.find(product => product.id === item.id);
      
      if (matchingProduct) {
        return { ...item, image: matchingProduct.image };
      }
      
      // If all fails, return the item as is
      return item;
    });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(restoreImageReferences(parsedCart));
    }
    
    if (savedWishlist) {
      const parsedWishlist = JSON.parse(savedWishlist);
      setWishlist(restoreImageReferences(parsedWishlist));
    }
  }, []);

  useEffect(() => {
    if (wishlist.length > 0) {
      // Store imagePath instead of image object
      const wishlistToStore = wishlist.map(item => ({
        ...item,
        // Keep imagePath but don't store the actual image object
        image: item.imagePath || (typeof item.image === 'string' ? item.image : "")
      }));
      localStorage.setItem("wishlist", JSON.stringify(wishlistToStore));
    }
  }, [wishlist]);

  useEffect(() => {
    if (cart.length > 0) {
      // Store imagePath instead of image object
      const cartToStore = cart.map(item => ({
        ...item,
        // Keep imagePath but don't store the actual image object
        image: item.imagePath || (typeof item.image === 'string' ? item.image : "")
      }));
      localStorage.setItem("cart", JSON.stringify(cartToStore));
    }
  }, [cart]);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      // Make sure to include imagePath
      const productWithPath = {
        ...product,
        imagePath: product.imagePath
      };
      const updatedCart = [...cart, productWithPath];
      setCart(updatedCart);
    }
    setSnackbarOpen(true);
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      // Make sure to include imagePath
      const productWithPath = {
        ...product,
        imagePath: product.imagePath
      };
      setWishlist([...wishlist, productWithPath]);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const renderCategory = (title, productList) => (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 5, fontSize: "2.5rem" }}>
        {title}
      </Typography>
      <Grid container spacing={4}>
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                position: "relative",
                boxShadow: "0 4px 6px rgba(9, 0, 0, 0.97)",
                height: "450px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <IconButton
                onClick={() => toggleWishlist(product)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  color: wishlist.some((item) => item.id === product.id)
                    ? "red"
                    : "gray",
                }}
              >
                <Favorite />
              </IconButton>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                onClick={() => handleProductClick(product)}
                sx={{
                  cursor: "pointer",
                  objectFit: "contain",
                  padding: "16px",
                  backgroundColor: "white",
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "250px"
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      mb: 1,
                      height: "48px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      height: "60px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {product.specifications || ""}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      mb: 2
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleAddToCart(product)}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{
      pt: 5, textAlign: "center",
      // backgroundImage: `url(${bg})`, // Replace with your image path
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundRepeat: "repeat",
      // minHeight: "100vh", 
    }}>
      <Container>
        {/* TechTrove Best Seller Section */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "white",
              border: "2px solid rgba(8, 0, 0, 0.99)",
              borderRadius: "15px",
              padding: "20px",
              width: "500px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 0 2px 5px rgba(0, 9, 9, 0.97)",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: "2.5rem",
                color: "black",
                mb: 0,
                pb: 0,
                fontWeight: "bold",
              }}
            >
              TechTrove Best Seller
            </Typography>
          </Box>
        </Container>

        {/* Brands Section */}
        <Box sx={{ mt: 10, textAlign: "left", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 5, fontSize: "2.5rem" }}>
            Best Selling Brands
          </Typography>
          <Grid container spacing={4}>
            {brandLogos.map((brand) => (
              <Grid item xs={12} sm={6} md={3} key={brand.id}>
                <Box
                  sx={{
                    background: "black",
                    border: "2px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "15px",
                    padding: "20px",
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <img
                    src={brand.image}
                    alt={brand.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    {brand.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {renderCategory("Best Seller in Laptops", products.laptops)}
        {renderCategory("Best Seller in Mobiles", products.mobiles)}
        {renderCategory("Best Seller in Tablets", products.tablets)}
        {renderCategory("Best Seller in Accessories", products.accessories)}
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Product added to cart"
      />
    </Box>
  );
};

export default Store;