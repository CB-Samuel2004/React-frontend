import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

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
import { useNavigate } from "react-router-dom";
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


import m11 from "../images/m/l1/1.jpg";
import m12 from "../images/m/l1/2.jpg";
import m13 from "../images/m/l1/3.jpg";


import m21 from "../images/m/l2/1.jpg";
import m22 from "../images/m/l2/2.jpg";
import m23 from "../images/m/l2/3.jpg";


import m31 from "../images/m/l3/1.jpg";
import m32 from "../images/m/l3/2.jpg";
import m33 from "../images/m/l3/3.jpg";

import m41 from "../images/m/l4/1.jpg";
import m42 from "../images/m/l4/2.jpg";
import m43 from "../images/m/l4/3.jpg";

import m51 from "../images/m/l5/1.jpg";
import m52 from "../images/m/l5/2.jpg";
import m53 from "../images/m/l5/3.jpg";

import m61 from "../images/m/l6/1.jpg";
import m62 from "../images/m/l6/2.jpg";
import m63 from "../images/m/l6/3.jpg";

import m71 from "../images/m/l7/1.jpg";
import m72 from "../images/m/l7/2.jpg";
import m73 from "../images/m/l7/3.jpg";

import m81 from "../images/m/l8/1.jpg";
import m82 from "../images/m/l8/2.jpg";
import m83 from "../images/m/l8/3.jpg";


import t11 from "../images/t/l1/1.jpg";
import t12 from "../images/t/l1/2.jpg";
import t13 from "../images/t/l1/3.jpg";

import t21 from "../images/t/l2/1.jpg";
import t22 from "../images/t/l2/2.jpg";
import t23 from "../images/t/l2/3.jpg";

import t31 from "../images/t/l3/1.jpg";
import t32 from "../images/t/l3/2.jpg";
import t33 from "../images/t/l3/3.jpg";

import t41 from "../images/t/l4/1.jpg";
import t42 from "../images/t/l4/2.jpg";
import t43 from "../images/t/l4/3.jpg";

import t51 from "../images/t/l5/1.jpg";
import t52 from "../images/t/l5/2.jpg";
import t53 from "../images/t/l5/3.jpg";

import t61 from "../images/t/l6/1.jpg";
import t62 from "../images/t/l6/2.jpg";
import t63 from "../images/t/l6/3.jpg";

import t71 from "../images/t/l7/1.jpg";
import t72 from "../images/t/l7/2.jpg";
import t73 from "../images/t/l7/3.jpg";

import t81 from "../images/t/l8/1.jpg";
import t82 from "../images/t/l8/2.jpg";
import t83 from "../images/t/l8/3.jpg";


import a11 from "../images/a/l1/1.jpg";
import a12 from "../images/a/l1/2.jpg";
import a13 from "../images/a/l1/3.jpg";

import a21 from "../images/a/l2/1.jpg";
import a22 from "../images/a/l2/2.jpg";
import a23 from "../images/a/l2/3.jpg";

import a31 from "../images/a/l3/1.jpg";
import a32 from "../images/a/l3/2.jpg";
import a33 from "../images/a/l3/3.jpg";

import a41 from "../images/a/l4/1.jpg";
import a42 from "../images/a/l4/2.jpg";
import a43 from "../images/a/l4/3.jpg";

import a51 from "../images/a/l5/1.jpg";
import a52 from "../images/a/l5/2.jpg";
import a53 from "../images/a/l5/3.jpg";

import a61 from "../images/a/l6/1.jpg";
import a62 from "../images/a/l6/2.jpg";
import a63 from "../images/a/l6/3.jpg";

import a71 from "../images/a/l7/1.jpg";
import a72 from "../images/a/l7/2.jpg";
import a73 from "../images/a/l7/3.jpg";

import a81 from "../images/a/l8/1.jpg";
import a82 from "../images/a/l8/2.jpg";
import a83 from "../images/a/l8/3.jpg";



interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string[];  // Always use string array for consistency
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
   useEffect(() => {
       const section = new URLSearchParams(location.search).get("section");
       const refs = {
         laptops: laptopsRef,
         mobiles: mobilesRef,
         tablets: tabletsRef,
         accessories: accessoriesRef,
       };
       
       const targetRef = section && refs[section as keyof typeof refs];
       if (targetRef?.current) {
         targetRef.current.scrollIntoView({ behavior: "smooth" });
       }
     }, [location]);

  const handleAddToCart = (product: ProductItem) => {
    if (!cart.some((item) => item.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart([...cart, {
        ...product,
        image: product.image  // Already storing keys, not actual images
      }]);    }
    setSnackbarOpen(true);
  };
  const toggleWishlist = (product: ProductItem) => {
    setWishlist(prev => 
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, {
          ...product,
          image: product.image  // Already storing keys, not actual images
        }]    );
  };

  // const toggleWishlist = (product: ProductItem) => {
  //   if (wishlist.some((item) => item.id === product.id)) {
  //     setWishlist(wishlist.filter((item) => item.id !== product.id));
  //   } else {
  //     setWishlist([...wishlist, product]);
  //   }
  // };

  // const handleProductClick = (product: ProductItem) => {
  //   navigate(`/product/${product.id}`, {
  //     state: {
  //       product: {
  //         ...product,
  //         image: product.image.slice(3), // Pass additional images for product detail
  //       },
  //     },
  //   });
  // };
  const handleProductClick = (product: ProductItem) => {
    navigate(`/product/${product.id}`, {
      state: { product }
    });
  };

//   const location = useLocation();

// useEffect(() => {
//     const section = new URLSearchParams(location.search).get("section");

//     if (section === "laptops" && laptopsRef.current) {
//       laptopsRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (section === "mobiles" && mobilesRef.current) {
//       mobilesRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (section === "tablets" && tabletsRef.current) {
//       tabletsRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (section === "accessories" && accessoriesRef.current) {
//       accessoriesRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);


  const products = {
    laptops: [
      {
              id: 1,
              title: "Dell [Smartchoice] Core i3-1215U, 12th Gen",
              price: "₹34,990",
              image: [l11, l12, l13],
              specifications: "8GB RAM / 512GB SSD / FHD / Windows 11",
              longSpecifications:
                "12th Gen Intel Core i3-1215U Processor, Full HD Display, Backlit Keyboard, Windows 11 Pro, WiFi 6",
            },
      {
        id: 2,
        title: "Acer ALG Gaming Laptop 13th Gen Intel Core i7",
        price: "₹69,990",
        image: [l21, l22, l23],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
             },
      {
        id: 3,
        title: "Lenovo V14 G3 (2024), Intel Core i5 12th Gen",
        price: "₹38,189",
        image:[l31, l32, l33],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },{
        id: 4,
        title: "HP 15 Intel Core i5 13th Gen",
        price: "₹69,990",
        image: [l41, l42, l43],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },{
        id: 5,
        title: "Apple MacBook Air Laptop",
        price: "₹69,990",
        image: [l51, l52, l53],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },{
        id: 6,
        title: "Lenovo IdeaPad Slim 3 13th Gen ",
        price: "₹69,990",
        image: [l61, l62, l63],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },{
        id: 7,
        title: "Dell {Smartchoice} G15-5530 Core i5-13450HX",
        price: "₹75,990",
        image: [l71, l72, l73],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },{
        id: 8,
        title: "ASUS ROG Strix Scar 16 (2024), Intel Core™ i9",
        price: "₹3,39,990",
        image:[l81, l82, l83],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
    ],
    mobiles: [
      {
        id: 9,
        title: "Samsung Galaxy S23 Ultra 5G",
        price: "₹72,999",
        image:[m11, m12, m13],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
           },
      {
        id: 10,
        title: "Redmi Note 13 5G",
        price: " ₹15,175",
        image:[m21, m22, m23],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
 },
      {
        id: 11,
        title: "Motorola Edge 50 Fusion 5G ",
        price: " ₹26,428",
        image:[m31, m32, m33],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",
      },
      {
        id: 12,
        title: "Nothing Phone (2a) Plus",
        price: "34,428",
        image:[m41, m42, m43],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 13,
        title: "iQOO Z7 Pro 5G",
        price: "₹18,999",
        image:[m51, m52, m53],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 14,
        title: "Motorola razr 50",
        price: " ₹54,999",
        image:[m61, m62, m63],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 15,
        title: "iQOO Z9s 5G",
        price: " ₹19,999",
        image:[m71, m72, m73],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 16,
        title: "iPhone 16 Pro",
        price: "₹1,16,900",
        image:[m81, m82, m83],
               specifications:
                 "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
               longSpecifications:
                 "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
    ],
    tablets: [
      {
        id: 17,
        title: "HONOR Pad 9",
        price: "₹22,999",
        image:[t11, t12, t13],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 18,
        title: "OnePlus Pad Go",
        price: "₹21,998",
        image:[t21, t22, t23],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 19,
        title: "Lenovo Tab M11",
        price: " ₹13,999",
        image:[t31, t32, t33],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 20,
        title: "Lenovo Tab Plus ",
        price: "$420",
        image:[t41, t42, t43],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 21,
        title: "DOMO Slate SLP12",
        price: "₹9,949",
        image:[t51, t52, t53],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 22,
        title: "Samsung Galaxy Tab S6 Lite",
        price: "₹23,728",
        image:[t61, t62, t63],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 23,
        title: "OnePlus Pad 2",
        price: "₹42,999",
        image:[t71, t72, t73],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 24,
        title: "HONOR Pad X9",
        price: "₹16,999",
        image:[t81, t82, t83],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
    ],
    accessories: [
      {
        id: 25,
        title: "boAt Airdopes 191",
        price: "₹1,499",
        image:[a11, a12, a13],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 26,
        title: "Noise Newly Launched Air Clips ",
        price: "₹2,999",
        image:[a21, a22, a23],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 27,
        title: "DELL MS3320W Wireless Mouse",
        price: "₹1,749",
        image:[a31, a32, a33],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 28,
        title: "ZEBRONICS K4000MW Wireless Keyboard ",
        price: "₹899",
        image:[a41, a42, a43],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 29,
        title: "SaleOn 8.3X5 inch Portable Storage Organizer ",
        price: "₹367",
        image:[a51, a52, a53],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 30,
        title: "FUR JADEN Pro Series",
        price: "₹2,999",
        image:[a61, a62, a63],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 31,
        title: "basics Laptop Stand",
        price: "₹349",
        image:[a71, a72, a73],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
      {
        id: 32,
        title: "HOEXL 42L Expandable Laptop Backpack",
        price: " ₹2,999",
        image:[a81, a82, a83],
        specifications:
          "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
        longSpecifications:
          "Gaming laptop with 16GB DDR4 RAM, 512GB SSD, 144Hz display, and RTX3050 Graphics for seamless gaming.",

      },
    ],
  };
  

  const filterProducts = (productList: ProductItem[]) => {
    return productList.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specifications?.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
                  // onClick={() => toggleWishlist(product)}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
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
                  image={product.image[0]}
                  onClick={() => handleProductClick(product)}
                  sx={{ 
                    cursor: "pointer",
                    objectFit: "contain",
                    padding: "16px",
                    backgroundColor: "white",
                  }}                />
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
                                    // onClick={() => handleAddToCart(product)}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleAddToCart(product);
                                    }}
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
  };

  return (
    <Box sx={{ pt: 5 }}>
      <Container sx={{ mb: 4 }}>
        <TextField
          variant="outlined"
          placeholder="Search products..."
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <Container>
      {renderCategory("Laptops", products.laptops, laptopsRef)}
{renderCategory("Mobiles", products.mobiles, mobilesRef)}
{renderCategory("Tablets", products.tablets, tabletsRef)}
{renderCategory("Accessories", products.accessories, accessoriesRef)}
 
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
