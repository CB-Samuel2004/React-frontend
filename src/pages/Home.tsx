import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  Box, 
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Snackbar,
  IconButton 
} from "@mui/material";
import { Favorite } from "@mui/icons-material";

// Import images
import one from "../images/home/c1.png";
import three from "../images/home/c2.jpg";
import four from "../images/home/c3.jpg";
import two from "../images/home/c.jpg";
import d from "../images/home/d.jpeg";
import l from "../images/home/l1.jpeg";
import m from "../images/home/mp.jpg";
import a from "../images/home/l2.jpg";
import t from "../images/home/t.jpg";
import l1 from "../images/l/l1/1.jpg";
import l2 from "../images/l/l2/1.jpg";
import m1 from "../images/m/l1/1.jpg";
import m2 from "../images/m/l2/1.jpg";
import t1 from "../images/t/l1/1.jpg";
import t2 from "../images/t/l2/1.jpg";
import a1 from "../images/a/l1/1.jpg";
import a2 from "../images/a/l2/1.jpg";

// Define interfaces
interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string[];  // Changed from string to string[] to match ProductDetails
  specifications?: string;
}

interface Slide {
  title?: string;
  subtitle?: string;
  image: string;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [wishlist, setWishlist] = useState<ProductItem[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const laptopsRef = useRef<HTMLDivElement>(null);
  const mobilesRef = useRef<HTMLDivElement>(null);
  const tabletsRef = useRef<HTMLDivElement>(null);
  const accessoriesRef = useRef<HTMLDivElement>(null);

  // Products data - updated to use image arrays
  const products = {
    laptops: [
      {
        id: 1,
        title: "Dell [Smartchoice] Core i3-1215U, 12th Gen",
        price: "₹34,990",
        image: [l1],  // Now using array
        specifications: "8GB RAM / 512GB SSD / FHD / Windows 11",
      },
      {
        id: 2,
        title: "Acer ALG Gaming Laptop 13th Gen Intel Core i7",
        price: "₹69,990",
        image: [l2],  // Now using array
        specifications: "16GB DDR4 / 512GB SSD / 6GB RTX3050 Graphics / 144Hz / Win11Home",
      },
      {
        id: 9,
        title: "Samsung Galaxy S23 Ultra 5G",
        price: "₹72,999",
        specifications: "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)",
        image: [m1],  // Now using array
      },
      {
        id: 10,
        title: "Redmi Note 13 5G",
        price: "₹15,175",
        specifications: "(Chromatic Purple, 8GB RAM, 256GB Storage)",
        image: [m2],  // Now using array
      },
      {
        id: 17,
        title: "HONOR Pad 9",
        price: "₹22,999",
        specifications: "12.1-Inch 2.5K Display, 8GB, 256GB Storage, Snapdragon 6 Gen 1",
        image: [t1],  // Now using array
      },
      {
        id: 18,
        title: "OnePlus Pad Go",
        price: "₹21,998",
        specifications: "Dolby Atmos Quad Speakers, 4G LTE(Calling) , 8GB RAM 128 GB",
        image: [t2],  // Now using array
      },
      {
        id: 25,
        title: "boAt Airdopes 191",
        price: "₹1,499",
        specifications: "32dB ANC, Ambient Mode, 60HRS Battery, 4Mics ENx, in-Ear Detection,Fast Charge",
        image: [a1],  // Now using array
      },
      {
        id: 26,
        title: "Noise Newly Launched Air Clips",
        price: "₹2,999",
        specifications: "Wireless Open Ear Earbuds with Chrome Finish, AirWave™ Technology",
        image: [a2],  // Now using array
      }
    ]
  };

  const slides: Slide[] = [
    {
      title: "Welcome to TechTrove",
      subtitle: "Start your tech journey by buying our best products",
      image: one,
    },
    { image: two },
    { image: three },
    { image: four },
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToStore = () => {
    navigate("/store");
  };

  const renderCategory = (title: string, productList: ProductItem[]) => (
    <Box sx={{ mt: 10 }}>
      {title && (
        <Typography variant="h5" gutterBottom sx={{ textAlign: "left", mb: 5, fontSize: "2.5rem" }}>
          {title}
        </Typography>
      )}
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
                image={product.image[0]} // Using first image in array
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
    <>
      {/* Carousel Container */}
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          width: "100%",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {/* Left Arrow */}
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "none",
            color: "white",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
            padding: "0.5rem",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
          onClick={prevSlide}
        >
          &#10092;
        </Button>

        {/* Slide */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box sx={{ textAlign: "center", color: "white", textShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)", position: "relative" }}>
            <Typography variant="h1" sx={{ fontSize: "3rem", margin: 0, marginTop: "30px" }}>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", marginTop: "8px" }}>
              {slides[currentSlide].subtitle}
            </Typography>
            {currentSlide === 0 && (
              <Button
                sx={{
                  background: "transparent",
                  border: "2px solid white",
                  color: "white",
                  padding: "0.8rem 1.5rem",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  marginTop: "40px",
                  transition: "background 0.3s, transform 0.3s",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-5px)",
                  },
                  "&:active": {
                    transform: "translateY(2px)",
                  },
                }}
                onClick={goToStore}
              >
                Shop now
              </Button>
            )}
          </Box>
        </Box>

        {/* Right Arrow */}
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "none",
            color: "white",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
            padding: "0.5rem",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
          onClick={nextSlide}
        >
          &#10093;
        </Button>

        {/* Slide Indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", bottom: "1rem", width: "100%" }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "30px",
                height: "4px",
                background: index === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
                margin: "0 5px",
                transition: "background 0.3s",
                cursor: "pointer",
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Box>
      </Box>

      {/* Image displayed after the carousel */}
      <Box
        component="img"
        src={d}
        alt="Additional content"
        sx={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          height: "auto",
          marginTop: "20px",
        }}
      />

      {/* Category Cards Section */}
      <Box sx={{ padding: "40px 20px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontSize: "2.5rem", color: "#333", marginBottom: "30px" }}>
          Our Categories
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {/* Category Cards */}
          {[
            { title: "Laptop", image: l, section: "laptops" },
            { title: "Mobile", image: m, section: "mobiles" },
            { title: "Tablet", image: t, section: "tablets" },
            { title: "Accessories", image: a, section: "accessories" }
          ].map((category) => (
            <Box
              key={category.title}
              sx={{
                background: "black",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "15px",
                padding: "20px",
                width: "200px",
                height: "300px",
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
              <Box
                component="img"
                src={category.image}
                alt={category.title}
                sx={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.4rem",
                  color: "white",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}>
                {category.title}
              </Typography>
              <Button
                onClick={() => navigate(`/store?section=${category.section}`)}
                sx={{
                  background: "transparent",
                  border: "2px solid white",
                  color: "white",
                  padding: "0.8rem 1.5rem",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  marginTop: "10px",
                  transition: "background 0.3s, transform 0.3s",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-5px)",
                  },
                  "&:active": {
                    transform: "translateY(2px)",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Best Sellers Section */}
      <Box sx={{ pt: 5, textAlign: "center" }}>
        <Container>
          {/* TechTrove Best Seller Header */}
          <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              sx={{
                background: "white",
                border: "2px solid rgba(8, 0, 0, 0.99)",
                borderRadius: "15px",
                padding: "0px",
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
                Top Deals
              </Typography>
            </Box>
          </Container>

          {/* Render all categories */}
          {renderCategory(null, products.laptops)}
         
        </Container>
      </Box>

      {/* Snackbar for cart notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Product added to cart"
      />
    </>
  );
};

export default Home;