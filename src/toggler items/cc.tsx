import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search, Favorite } from "@mui/icons-material";

// Import all images
import l11 from "../images/l/l1/1.jpg";
import l12 from "../images/l/l1/2.jpg";
import l13 from "../images/l/l1/3.jpg";
import l21 from "../images/l/l2/1.jpg";
import l22 from "../images/l/l2/2.jpg";
import l23 from "../images/l/l2/3.jpg";
import l31 from "../images/l/l3/1.jpg";
import l32 from "../images/l/l3/2.jpg";
import l33 from "../images/l/l3/3.jpg";
import l41 from "../images/l/l4/1.jpg";
import l42 from "../images/l/l4/2.jpg";
import l43 from "../images/l/l4/3.jpg";
import l51 from "../images/l/l5/1.jpg";
import l52 from "../images/l/l5/2.jpg";
import l53 from "../images/l/l5/3.jpg";
import l61 from "../images/l/l6/1.jpg";
import l62 from "../images/l/l6/2.jpg";
import l63 from "../images/l/l6/3.jpg";
import l71 from "../images/l/l7/1.jpg";
import l72 from "../images/l/l7/2.jpg";
import l73 from "../images/l/l7/3.jpg";
import l81 from "../images/l/l8/1.jpg";
import l82 from "../images/l/l8/2.jpg";
import l83 from "../images/l/l8/3.jpg";

import m1 from "../images/m/l1/1.jpg";
import m2 from "../images/m/l2/1.jpg";
import m3 from "../images/m/l3/1.jpg";
import m4 from "../images/m/l4/1.jpg";
import m5 from "../images/m/l5/1.jpg";
import m6 from "../images/m/l6/1.jpg";
import m7 from "../images/m/l7/1.jpg";
import m8 from "../images/m/l8/1.jpg";

import t1 from "../images/t/l1/1.jpg";
import t2 from "../images/t/l2/1.jpg";
import t3 from "../images/t/l3/1.jpg";
import t4 from "../images/t/l4/1.jpg";
import t5 from "../images/t/l5/1.jpg";
import t6 from "../images/t/l6/1.jpg";
import t7 from "../images/t/l7/1.jpg";
import t8 from "../images/t/l8/1.jpg";

import a1 from "../images/a/l1/1.jpg";
import a2 from "../images/a/l2/1.jpg";
import a3 from "../images/a/l3/1.jpg";
import a4 from "../images/a/l4/1.jpg";
import a5 from "../images/a/l5/1.jpg";
import a6 from "../images/a/l6/1.jpg";
import a7 from "../images/a/l7/1.jpg";
import a8 from "../images/a/l8/1.jpg";

interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string | string[];
  specifications?: string;
  longSpecifications?: string;
}

const Store: React.FC = () => {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [wishlist, setWishlist] = useState<ProductItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const laptopsRef = useRef<HTMLDivElement>(null);
  const mobilesRef = useRef<HTMLDivElement>(null);
  const tabletsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);

  const products = {
    laptops: [
      {
        id: 1,
        title: "Dell [Smartchoice] Core i3-1215U, 12th Gen",
        price: "₹34,990",
        image: [l11, l12, l13],
        specifications: "8GB RAM / 512GB SSD / FHD / Windows 11",
        longSpecifications: "12th Gen Intel Core i3-1215U Processor, Full HD Display, Backlit Keyboard, Windows 11 Pro, WiFi 6",
      },
      {
        id: 2,
        title: "Acer ALG Gaming Laptop 13th Gen Intel Core i7",
        price: "₹69,990",
        image: [l21, l22, l23],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 3,
        title: "Lenovo V14 G3 (2024), Intel Core i5 12th Gen",
        price: "₹38,189",
        image: [l31, l32, l33],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 4,
        title: "HP 15 Intel Core i5 13th Gen",
        price: "₹69,990",
        image: [l41, l42, l43],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 5,
        title: "Apple MacBook Air Laptop",
        price: "₹69,990",
        image: [l51, l52, l53],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 6,
        title: "Lenovo IdeaPad Slim 3 13th Gen",
        price: "₹69,990",
        image: [l61, l62, l63],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 7,
        title: "Dell {Smartchoice} G15-5530 Core i5-13450HX",
        price: "₹75,990",
        image: [l71, l72, l73],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 8,
        title: "ASUS ROG Strix Scar 16 (2024), Intel Core™ i9",
        price: "₹3,39,990",
        image: [l81, l82, l83],
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications: "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
    ],
    mobiles: [
      {
        id: 9,
        title: "Samsung Galaxy S23 Ultra 5G",
        price: "₹72,999",
        image: m1,
        specifications: "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)",
      },
      {
        id: 10,
        title: "Redmi Note 13 5G",
        price: "₹15,175",
        image: m2,
        specifications: "(Chromatic Purple, 8GB RAM, 256GB Storage)",
      },
      {
        id: 11,
        title: "Motorola Edge 50 Fusion 5G",
        price: "₹26,428",
        image: m3,
        specifications: "(Hot Pink, 12GB RAM, 256GB Storage)",
      },
      {
        id: 12,
        title: "Nothing Phone (2a) Plus",
        price: "₹34,428",
        image: m4,
        specifications: "8GB RAM, 256GB Storage, Up to 16GB RAM, Dimensity 7350 Pro 5G Processor",
      },
      {
        id: 13,
        title: "iQOO Z7 Pro 5G",
        price: "₹18,999",
        image: m5,
        specifications: "8GB RAM, 128GB Storage MediaTek Dimesity 7200 5G Processor | 64MP Aura camera",
      },
      {
        id: 14,
        title: "Motorola razr 50",
        price: "₹54,999",
        image: m6,
        specifications: "Koala Grey, 8GB RAM, 256GB Storage AMOLED 120Hz Display",
      },
      {
        id: 15,
        title: "iQOO Z9s 5G",
        price: "₹19,999",
        image: m7,
        specifications: "Titanium Matte, 8GB RAM, 128GB Storage, Dimesity 7300 5G Processor",
      },
      {
        id: 16,
        title: "iPhone 16 Pro",
        price: "₹1,16,900",
        image: m8,
        specifications: "12GB Storage 4K 120 fps Dolby Vision and a Huge Leap in Battery Life.",
      },
    ],
    tablets: [
      {
        id: 17,
        title: "HONOR Pad 9",
        price: "₹22,999",
        image: t1,
        specifications: "12.1-Inch 2.5K Display, 8GB, 256GB Storage, Snapdragon 6 Gen 1",
      },
      {
        id: 18,
        title: "OnePlus Pad Go",
        price: "₹21,998",
        image: t2,
        specifications: "Dolby Atmos Quad Speakers, 4G LTE(Calling), 8GB RAM 128 GB",
      },
      {
        id: 19,
        title: "Lenovo Tab M11",
        price: "₹13,999",
        image: t3,
        specifications: "4 GB RAM, 128 GB ROM|11 Inch Screen| 90 Hz, 72% NTSC, FHD Display",
      },
      {
        id: 20,
        title: "Lenovo Tab Plus",
        price: "₹420",
        image: t4,
        specifications: "8 GB RAM, 256 GB ROM| 11.5 Inch, 2K, 90 Hz Refresh",
      },
      {
        id: 21,
        title: "DOMO Slate SLP12",
        price: "₹9,949",
        image: t5,
        specifications: "8GB RAM / 256GB Storage / 16MP Camera / 120Hz Display",
      },
      {
        id: 22,
        title: "Samsung Galaxy Tab S6 Lite",
        price: "₹23,728",
        image: t6,
        specifications: "S-Pen in Box, Slim, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM",
      },
      {
        id: 23,
        title: "OnePlus Pad 2",
        price: "₹42,999",
        image: t7,
        specifications: "12GB RAM, 256GB Storage, Snapdragon 8 Gen 3, 144Hz Refresh Rate",
      },
      {
        id: 24,
        title: "HONOR Pad X9",
        price: "₹16,999",
        image: t8,
        specifications: "120Hz 2K Display, Snapdragon 685, 8GB (8GB+5GB RAM Turbo) 128GB ROM",
      },
    ],
    accessories: [
      {
        id: 25,
        title: "boAt Airdopes 191",
        price: "₹1,499",
        image: a1,
        specifications: "32dB ANC, Ambient Mode, 60HRS Battery, 4Mics ENx, in-Ear Detection, Fast Charge",
      },
      {
        id: 26,
        title: "Noise Newly Launched Air Clips",
        price: "₹2,999",
        image: a2,
        specifications: "Wireless Open Ear Earbuds with Chrome Finish, AirWave™ Technology",
      },
      {
        id: 27,
        title: "DELL MS3320W Wireless Mouse",
        price: "₹1,749",
        image: a3,
        specifications: "4000DPI, up to 36 Month Battery Life, 3Y Advance Exchange Warranty",
      },
      {
        id: 28,
        title: "ZEBRONICS K4000MW Wireless Keyboard",
        price: "₹899",
        image: a4,
        specifications: "2 Bluetooth & 2.4 GHz Wireless Connection, Integrated Multimedia Keys",
      },
      {
        id: 29,
        title: "SaleOn 8.3X5 inch Portable Storage Organizer",
        price: "₹367",
        image: a5,
        specifications: "Organizer for USB Cable, Earphone, Power Bank, Charger, Hard Disk",
      },
      {
        id: 30,
        title: "FUR JADEN Pro Series",
        price: "₹2,999",
        image: a6,
        specifications },
              {
                id: 31,
                title: "basics Laptop Stand",
                price: "₹349",
                specifications: "Height-Adjustable, Portable, Ventilated, Fits Up to 15.6-Inch",
                image: a7,
              },
              {
                id: 32,
                title: "HOEXL 42L Expandable Laptop Backpack",
                price: " ₹2,999",
                specifications: " Premium Laptop Backpacks for Men, Women for Travel, School, College - Tech Bag",
                image: a8,
              },
            ],
          };
        
          const renderCategory = (
            title: string,
            productList: ProductItem[],
            ref: React.RefObject<HTMLDivElement>
          ) => {
            const filteredProducts = filterProducts(productList);
        
            if (filteredProducts.length === 0) return null;
        
            return (
              <Box ref={ref} sx={{ mt: 10 }}>
                <Typography variant="h5" gutterBottom>
                  {title}
                </Typography>
                <Grid container spacing={4}>
                  {filteredProducts.map((product) => (
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
                          // Use the first image from array or single image
                          image={Array.isArray(product.image) ? product.image[0] : product.image}
                          onClick={() => handleProductClick(product)}
                          sx={{
                            cursor: "pointer",
                            objectFit: "contain",
                            padding: "16px",
                            backgroundColor: "white",
                          }}
                        />
                        {/* Rest of the card content remains the same */}
        <CardContent sx={{flexGrow: 1,display: "flex",flexDirection: "column",justifyContent: "space-between",height: "250px"}}><Box><Typography variant="h6"sx={{color: "white",fontSize: "1rem",fontWeight: "bold",mb: 1,height: "48px",overflow: "hidden",display: "-webkit-box",WebkitLineClamp: 2,WebkitBoxOrient: "vertical"}}>{product.title}</Typography>
        <Typography variant="body2"sx={{color: "rgba(255, 255, 255, 0.7)",height: "60px",overflow: "hidden",display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical"}}>{product.specifications || ""}</Typography></Box><Box>
        <Typography variant="body2" sx={{color: "white",fontSize: "1.1rem",fontWeight: "bold",mb: 2}}>{product.price}</Typography><Button variant="contained"onClick={() => handleAddToCart(product)}fullWidth sx={{backgroundColor: "white",color: "black","&:hover": {backgroundColor: "rgba(255, 255, 255, 0.8)",},}}>Add to Cart</Button></Box></CardContent></Card></Grid>))}</Grid></Box>);};
        return (<Box sx={{ pt: 5 }}><Container sx={{ mb: 4 }}><TextField variant="outlined" placeholder="Search products..." fullWidth value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}InputProps={{endAdornment: (<InputAdornment position="end"><Search /></InputAdornment>),}}/></Container><Container>{renderCategory("Laptops", products.laptops, laptopsRef)}{renderCategory("Mobiles", products.mobiles, mobilesRef)}{renderCategory("Tablets", products.tablets, tabletsRef)}{renderCategory("Accessories", products.accessories, accessoriesRef)}</Container><Snackbar open={snackbarOpen}autoHideDuration={3000}onClose={() => setSnackbarOpen(false)}message="Product added to cart"/></Box>);};export default Store;