import React, { useState } from "react";
import one from "../images/about/ab.jpg";



import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";

const Login = () => {
  const [open, setOpen] = useState(false); // To control the Snackbar visibility
  const [message, setMessage] = useState(""); // To set the message for Snackbar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a successful login action (you can replace this with your actual login logic)
    setMessage("Login Successful!");
    setOpen(true); // Open the Snackbar
  };

  const handleClose = () => {
    setOpen(false); // Close the Snackbar
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundImage: "url('1.jpg')", // Make sure img.jpg is in the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures the container takes up the full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          // background: "linear-gradient(135deg,gray,black);)",
          backgroundColor: "white",
          borderRadius: "8px",
          color: "#fff",
          padding: "24px",
          boxShadow: "0 0 2px 4px rgba(0, 0, 0, 0.97)",
        }}
      >
            <Typography variant="h5" marginBottom={2} color="black" sx={{ textTransform: "uppercase", fontWeight: "700" }}>
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit} // Handle form submission
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{ marginBottom: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
            />
          <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            padding: "0.8rem 2rem",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          textTransform: "none",
                          backgroundColor: "black",
                            color: "white",
                          "&:hover": {
                            backgroundColor: "white",
                            color: "black",
                            boxShadow: "0 0 2px 5px black",
          
                            },
                          }}
                        >
            Login
          </Button>
          <Link href="/signup" variant="body2" sx={{ color: "black" }}>
            <p>{"Don't have an account? Sign up"}</p>
          </Link>
        </Box>
      </Box>

      {/* Snackbar for success message at the top */}
      <Snackbar
        open={open} // Show Snackbar if open is true
        autoHideDuration={3000} // Close Snackbar after 3 seconds
        onClose={handleClose} // Close Snackbar when triggered
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%", fontWeight: "bold" }}>
          {message} {/* Display dynamic message */}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
