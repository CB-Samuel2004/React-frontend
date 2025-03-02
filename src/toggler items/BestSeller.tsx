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


interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string;
  specifications?: string;
}

const Store: React.FC = () => {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [wishlist, setWishlist] = useState<ProductItem[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const laptopsRef = useRef<HTMLDivElement>(null);
  const mobilesRef = useRef<HTMLDivElement>(null);
  const tabletsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (product: ProductItem) => {
    if (!cart.some((item) => item.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    }
    setSnackbarOpen(true);
  };

  const toggleWishlist = (product: ProductItem) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const handleProductClick = (product: ProductItem) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const products = {
    laptops: [
      {
        id: 1,
        title: "Dell [Smartchoice] Core i3-1215U, 12th Gen",
        price: "₹34,990",
        image: l1,
        specifications: "8GB RAM / 512GB SSD / FHD / Windows 11",
      },
      {
        id: 2,
        title: "Acer ALG Gaming Laptop 13th Gen Intel Core i7",
        price: "₹69,990",
        image: l2,
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home ",
      },
      {
        id: 3,
        title: "Lenovo V14 G3 (2024), Intel Core i5 12th Gen",
        price: "₹38,189",
        image: l3,
        specifications:
          "16GB/512GB SSD/Intel UHD Graphics/Windows 11/ Thin and Light Business Laptop/14.0",
      },
      {
        id: 4,
        title: "HP 15 Intel Core i5 13th Gen",
        price: "₹69,990",
        image: l4,
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
      },
      {
        id: 10,
        title: "Redmi Note 13 5G",
        price: " ₹15,175",
        specifications: "(Chromatic Purple, 8GB RAM, 256GB Storage)",
        image: m2,
      },
      {
        id: 11,
        title: "Motorola Edge 50 Fusion 5G ",
        price: " ₹26,428",
        specifications: "(Hot Pink, 12GB RAM, 256GB Storage)",
        image: m3,
      },
      {
        id: 12,
        title: "Nothing Phone (2a) Plus",
        price: "34,428",
        specifications:
          "8GB RAM, 256GB Storage,Up to 16GB RAM,Dimensity 7350 Pro 5G Processor",
        image: m4,
      },
    ],
    tablets: [
      {
             id: 17,
             title: "HONOR Pad 9",
             price: "₹22,999",
             specifications: "12.1-Inch 2.5K Display, 8GB, 256GB Storage, Snapdragon 6 Gen 1",
             image: t1,
           },
           {
             id: 18,
             title: "OnePlus Pad Go",
             price: "₹21,998",
             specifications: " Dolby Atmos Quad Speakers, 4G LTE(Calling) , 8GB RAM 128 GB",
             image: t2,
           },
           {
             id: 19,
             title: "Lenovo Tab M11",
             price: " ₹13,999",
             specifications: " 4 GB RAM, 128 GB ROM|11 Inch Screen| 90 Hz, 72% NTSC, FHD Display",
             image: t3,
           },
           {
             id: 20,
             title: "Lenovo Tab Plus ",
             price: "$420",
             specifications: "8 GB RAM, 256 GB ROM| 11.5 Inch, 2K, 90 Hz Refresh",
             image: t4,
           },],
    accessories: [
     {
             id: 25,
             title: "boAt Airdopes 191",
             price: "₹1,499",
             specifications: "32dB ANC, Ambient Mode, 60HRS Battery, 4Mics ENx, in-Ear Detection,Fast Charge",
             image: a1,
           },
           {
             id: 26,
             title: "Noise Newly Launched Air Clips ",
             price: "₹2,999",
             specifications: " Wireless Open Ear Earbuds with Chrome Finish, AirWave™ Technology",
             image: a2,
           },
           {
             id: 27,
             title: "DELL MS3320W Wireless Mouse",
             price: "₹1,749",
             specifications: "4000DPI, up to 36 Month Battery Life, 3Y Advance Exchange Warranty",
             image: a3,
           },
           {
             id: 28,
             title: "ZEBRONICS K4000MW Wireless Keyboard ",
             price: "₹899",
             specifications: "2 Bluetooth & 2.4 GHz Wireless Connection, Integrated Multimedia Keys",
             image: a4,
           },
    ],
  };

  const brandLogos = [
    { id: 1, title: "Acer", image: acer },
    { id: 2, title: "Dell", image: dell },
    { id: 3, title: "HP", image: hp },
    { id: 4, title: "Lenovo", image: lenova },
    { id: 5, title: "Moto", image: moto },
    { id: 6, title: "Samsung", image: samsung },
    { id: 7, title: "Redmi", image: redmi },
    { id: 8, title: "Nothing", image: nothing },

    { id: 9, title: "Zebronics", image: zeb },
    { id: 10, title: "One plus", image: plus },
    { id: 11, title: "Boat", image: boat },
    { id: 12, title: "Noise", image: noise },

  ];

  const renderCategory = (
    title: string,
    productList: ProductItem[]
  ) => (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 5, fontSize: "2.5rem"}}>
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
            >              <IconButton
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
              <CardContent sx={{ 
                              flexGrow: 1, 
                              display: "flex", 
                              flexDirection: "column",
                              justifyContent: "space-between",
                              height: "250px"
                            }}>
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
    <Box sx={{ pt: 5, textAlign: "center", 
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
  <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 5,fontSize: "2.5rem"}}>
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

        {/* Mobile Subheading */}
        {renderCategory("Best Seller in Mobiles", products.mobiles)}

        {/* Tablet Subheading */}
        {renderCategory("Best Seller in Tablets", products.tablets)}

        {/* Accessories Subheading */}
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
