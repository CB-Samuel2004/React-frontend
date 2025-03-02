import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Box,
  Card,
  Typography,
  Divider,
  Button,
  TextField,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import l5 from "../images/pro.png";


const steps = ["Order packed", "Shipped", "Delivery completed"];

const orders = [
  { id: "12345", date: "Dec 1, 2024", total: "₹15,000", status: 1 },
  { id: "12346", date: "Nov 15, 2024", total: "₹69,990", status: 2 },
  { id: "12347", date: "Oct 30, 2024", total: "₹26,428", status: 3 },
  {
    id: "ORD12345",
    date: "2024-12-20",
    total: "₹5,000",
    status: 3, // Example: Order has reached the 2nd step (shipped)
  },
  {
    id: "ORD12346",
    date: "2024-12-22",
    total: "₹2,500",
    status: 3, // Example: Order is delivered
  },
];

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: "Sam",
    email: "sam@gmail.com",
    address: "123 Main Street,chennai,tamilnadu-600116",
    phone: "(+91) 1234567890",
    profileImage: l5,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeOrder, setActiveOrder] = useState<string | null>(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleOrderDetails = (orderId: string) => {
    setActiveOrder((prevOrder) => (prevOrder === orderId ? null : orderId));
  };

  const handleViewMore = () => {
    navigate("/orders"); // Redirect to the Orders page
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        My Account
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: "20px", textAlign: "center", backgroundColor: "#fff", boxShadow: 3 }}>
            <Avatar
              src={user.profileImage}
              alt={user.name}
              sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: "15px" }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "15px" }}>
              {user.email}
            </Typography>
            <Button
              variant="contained"
              fullWidth
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
                  boxShadow: "0 0 2px 5px rgba(6, 6, 6, 0.97)",
    
                },
              }}
              onClick={handleEditClick}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ padding: "20px", backgroundColor: "#fff", boxShadow: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
              Personal Information
            </Typography>
            <Divider sx={{ marginBottom: "15px" }} />

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Name:</strong>
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ marginTop: "8px" }}
                  />
                ) : (
                  user.name
                )}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Email:</strong>
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ marginTop: "8px" }}
                  />
                ) : (
                  user.email
                )}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Address:</strong>
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ marginTop: "8px" }}
                  />
                ) : (
                  user.address
                )}
              </Typography>

              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Phone:</strong>
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ marginTop: "8px" }}
                  />
                ) : (
                  user.phone
                )}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "30px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
          Order History
        </Typography>
        <Card sx={{ padding: "20px", backgroundColor: "#fff", boxShadow: 3 }}>
          <List>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <ListItemButton onClick={() => toggleOrderDetails(order.id)}>
                  <ListItemText
                    primary={`Order #${order.id}`}
                    secondary={`Placed on: ${order.date} | Total: ${order.total}`}
                  />
                </ListItemButton>
                {activeOrder === order.id && (
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                      Status
                    </Typography>
                    <Stepper activeStep={order.status} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                )}
                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Button
            variant="outlined"
            fullWidth
            sx={{ marginTop: "15px", color: "black", borderColor: "black" }}
            onClick={handleViewMore}
          >
            More Info
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;
