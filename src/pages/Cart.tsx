import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductItem {
  id: number;
  title: string;
  price: string;
  image: string[];  // Updated to match ProductDetails interface
  specifications?: string;
  longSpecifications?: string;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ProductItem[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    paymentMethod: "cashOnDelivery",
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const handleRemove = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleRemoveAll = () => {
    setCart([]);
  };

  const handleCheckout = () => setOpen(true);

  const handlePlaceOrder = () => {
    // Validate form fields
    if (!form.name || !form.phone || !form.address || !form.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Basic phone validation (assuming Indian phone numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setOpen(false);
    alert("Order Placed Successfully! Details sent to your email.");
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ''));
    return sum + price;
  }, 0);

  const formattedTotal = total.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  const handlePaymentMethodChange = (event: any) => {
    setForm({ ...form, paymentMethod: event.target.value });
  };

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Your Cart
        </Typography>
        {cart.length === 0 ? (
          <Paper sx={{
            boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
            borderRadius: "8px",
            padding: "1rem",
            height: "100%",
            textAlign: "center",
          }}>
            <Typography variant="h6" gutterBottom>
              No items in the cart
            </Typography>
            <Button 
              sx={{
                padding: "0.8rem 2rem",
                borderRadius: "20px",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "gray",
                  color: "black",
                },
              }}
              variant="contained"
              onClick={() => navigate("/store")}
            >
              Add Item
            </Button>
          </Paper>
        ) : (
          <>
            <Grid container spacing={4}>
              {cart.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}>
                    <CardMedia 
                      component="img" 
                      height="200" 
                      image={item.image[0]} // Use the first image from the array
                      alt={item.title}
                      sx={{
                        objectFit: "contain",
                        p: 2,
                        backgroundColor: "white"
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="h6" color="primary" gutterBottom>{item.price}</Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleRemove(item.id)}
                        sx={{
                          mt: 2,
                          borderRadius: "20px",
                          '&:hover': {
                            opacity: 0.9,
                          },
                        }}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ 
              mt: 4, 
              p: 3, 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Total: {formattedTotal}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleRemoveAll}
                  sx={{ 
                    width: "48%",
                    borderRadius: "20px",
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                >
                  Remove All
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCheckout}
                  sx={{ 
                    width: "48%",
                    color: "white", 
                    backgroundColor: "black",
                    borderRadius: "20px",
                    "&:hover": {
                      color: "black", 
                      backgroundColor: "white",
                      boxShadow: "0 0 2px 4px rgba(9, 0, 0, 0.97)",
                    },
                  }}
                >
                  Proceed to Pay
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <Typography variant="h5">Enter Details</Typography>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            helperText="Enter 10-digit mobile number"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Address"
            multiline
            rows={3}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={form.paymentMethod}
              onChange={handlePaymentMethodChange}
              label="Payment Method"
            >
              <MenuItem value="cashOnDelivery">Cash on Delivery</MenuItem>
              <MenuItem value="googlePay" disabled>
                Google Pay (Coming Soon)
              </MenuItem>
              <MenuItem value="netBanking" disabled>
                Net Banking (Coming Soon)
              </MenuItem>
              <MenuItem value="upi" disabled>
                UPI (Coming Soon)
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setOpen(false)} 
            sx={{
              borderRadius: "20px",
              px: 3,
              "&:hover": {
                opacity: "0.8",
              },
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handlePlaceOrder} 
            sx={{
              borderRadius: "20px",
              backgroundColor: "black",
              color: "white",
              px: 3,
              "&:hover": {
                opacity: "0.8",
              },
            }}
          >
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cart;