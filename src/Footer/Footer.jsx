import React from "react";
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem 1rem",
        width: "100%",
        marginTop: "3rem", // Space above the footer
      }}
    >
      <hr />
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ margin: "0 auto", maxWidth: "1200px" }}
      >
        {/* Left Section - Logo and Description */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            TechTrove
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            TechTrove is a premier online destination for tech enthusiasts,
            offering a wide range of the latest gadgets and accessories.
          </Typography>
        </Grid>

        {/* Center Section - Navigation Links */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Company
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="Aboutus"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="Store"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="Contact"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Resources
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Support
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{ "&:hover": { opacity: 0.6 } }}
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section - Social Icons and Contact Button */}
        <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Facebook />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Twitter />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Instagram />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Pinterest />
            </Link>
          </Box>
          {/* Wrap Button with React Router Link to navigate */}
          <RouterLink to="/Contact">
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
              Contact Us
            </Button>
          </RouterLink>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          borderTop: "1px solid gray",
          mt: 4,
          pt: 2,
          textAlign: "center",
          fontSize: "0.8rem",
        }}
      >
        © 2019-2020 All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
