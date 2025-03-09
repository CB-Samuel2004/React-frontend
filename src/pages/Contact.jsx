import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button, Snackbar, Alert } from "@mui/material";



const ContactForm: React.FC = () => {
  const [open, setOpen] = useState(false); // Control the popup visibility
  const [message, setMessage] = useState(""); // Dynamic message for Snackbar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a successful message submission
    setMessage("Feedback Received!");
    setOpen(true); // Open the Snackbar
  };

  const handleClose = () => {
    setOpen(false); // Close the Snackbar when clicked or after timeout
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "40px" }}>
      <Typography variant="h4" textAlign="center" marginBottom={4} sx={{ textTransform: "uppercase", fontWeight: "700" }}>
        Contact Form
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Side: Contact Form */}
        <Grid item xs={12} md={6}>
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
              Send us a message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ marginBottom: "16px", backgroundColor: "white", borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ marginBottom: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                sx={{ marginBottom: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
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
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>

        {/* Right Side: Contact Details */}
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h5" marginBottom={2} sx={{ textTransform: "uppercase", fontWeight: "700" }}>
              Contact us
            </Typography>
            <Typography variant="body1" marginBottom={2}>
              We’re open for any suggestion or just to have a chat.
            </Typography>
            <Typography variant="body2" marginBottom={1}>
              📍 Address: 1/1,12th street, Iyyappanthangal, Chennai 600056
            </Typography>
            <Typography variant="body2" marginBottom={1}>
              📞 Phone: +91 772 587 800
            </Typography>
            <Typography variant="body2" marginBottom={1}>
              📧 Email: info@example.com
            </Typography>
            <Typography variant="body2" marginBottom={1}>
              🌐 Website: www.example.com
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for feedback message */}
      <Snackbar
        open={open} // Show Snackbar if open is true
        autoHideDuration={3000} // Close Snackbar after 3 seconds
        onClose={handleClose} // Close Snackbar when triggered
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top center
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%", fontWeight: 'bold' }}>
          {message} {/* Display dynamic message */}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
