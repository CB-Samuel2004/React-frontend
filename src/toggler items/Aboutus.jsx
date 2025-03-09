import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

import imgSrc from "../images/about/log.jpg"; // Adjust the relative path to your image
import one from "../images/about/ab.jpg";
const AboutUs: React.FC = () => {
  return (
    <Box
    
      sx={{
        padding: "2rem 1rem",
        backgroundColor: "#f8f9fa",
        color: "#333",
      }}
    >
      {/* Hero Section */}
      <Box
      
        sx={{
          backgroundImage: `url(${one})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    padding: "6rem 1rem",
    color: "white",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="h6">
          Your Trusted Destination for Laptop, Mobile, Tablet, and Accessories
        </Typography>
      </Box>

      {/* About Us Content */}
      <Box sx={{ maxWidth: "1200px", margin: "2rem auto" }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imgSrc}
              alt="About Us"
              sx={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "black" }}
            >
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              At <strong>Tech Trove</strong>, we are passionate about providing
              the best accessories for your laptops, mobiles, and tablets.
              Whether you need durable cases, fast chargers, high-quality
              headphones, or versatile keyboards, we’ve got you covered. Our
              mission is to enhance your tech experience with products that are
              both functional and stylish.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Founded by a team of tech enthusiasts, <strong>Tech Trove</strong>{" "}
              aims to bridge the gap between quality and affordability. Our
              carefully curated collection ensures that you find what you need
              for your gadgets, all in one place.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Our Values Section */}
      <Box
        sx={{
          backgroundColor: "#e9ecef",
          padding: "2rem 1rem",
          margin: "2rem 0",
        }}
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Quality First
              </Typography>
              <Typography variant="body2">
                We prioritize premium materials and rigorous testing to ensure
                our products exceed your expectations.We believe in offering only the best. By prioritizing premium materials and conducting thorough, rigorous testing, we ensure our products not only meet but exceed your expectations.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Customer Focus
              </Typography>
              <Typography variant="body2">
                Your satisfaction drives us. We are committed to delivering
                excellent service and support at every step.Your satisfaction is at the heart of everything we do. We are committed to providing exceptional service
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Innovation
              </Typography>
              <Typography variant="body2">
                We stay ahead of trends to bring you the latest accessories
                that complement your tech needs.We are passionate about staying ahead of the curve, continuously pushing boundaries to offer cutting-edge products that elevate your tech experience.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "#f8f9fa" }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            What people are saying about Tech Trove
          </Typography>
          <Typography variant="body1" sx={{ color: "#6c757d" }}>
            A tech accessories experience people love to talk about.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
                  borderRadius: "8px",
                  padding: "1rem",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    "Tech Trove provides excellent service. The products are
                    high-quality, and I always find what I need!"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    - Alex Johnson
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Verified Customer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
                  borderRadius: "8px",
                  padding: "1rem",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    "Fast delivery and affordable prices. Highly recommend Tech
                    Trove for all your tech accessory needs!"
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    - Emily Brown
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Freelance Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
<br />
<br />
        {/* Stats Section */}
        <Box
          sx={{
            backgroundImage: `url(${one})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            marginTop: "3rem",
            padding: "2rem 0",
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                120+
              </Typography>
              <Typography variant="body1">Products</Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                2.5M
              </Typography>
              <Typography variant="body1">Happy Customers</Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                24x7
              </Typography>
              <Typography variant="body1">Support</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", padding: "2rem 1rem" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "#black" }}
        >
          Ready to Upgrade Your Tech Experience with <strong>Tech Trove</strong>?
        </Typography>
        <RouterLink to="/store">
        <Button
          variant="contained"
           sx={{
                padding: "0.8rem 2rem",
                borderRadius: "20px",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "white",
                  color: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "0 0 2px 5px rgba(254, 255, 255, 0.97)",
    
                },
              }}
        >
          Shop Now
        </Button>
        </RouterLink>
      </Box>
    </Box>
  );
};

export default AboutUs;
