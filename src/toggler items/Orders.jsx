import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Grid,
  Skeleton,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import m1 from "../images/m/l1/1.jpg";
import m2 from "../images/m/l2/1.jpg";
import m3 from "../images/m/l3/1.jpg";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated fetch orders (replace with real API call)
  useEffect(() => {
    const mockOrders = [
      { id: "12345", date: "Dec 1, 2024", total: "₹15,000", image: m1 },
      { id: "12346", date: "Nov 15, 2024", total: "₹69,990", image: m2 },
      { id: "12347", date: "Oct 30, 2024", total: "₹26,428", image: m3 },
    ];

    setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false); // Simulate data loading
    }, 2000);
  }, []);

  const toggleOrderDetails = (order) => {
    setActiveOrder((prevOrder) => (prevOrder?.id === order.id ? null : order));
  };

  const handleDownload = (order) => {
    console.log(`Downloading details for order #${order.id}`);
  };

  const handlePrint = (order) => {
    console.log(`Printing details for order #${order.id}`);
  };

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
        Order History
      </Typography>
      <Card sx={{ padding: "20px", backgroundColor: "#fff", boxShadow: 3 }}>
        <List>
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              <ListItemButton onClick={() => toggleOrderDetails(order)}>
                <ListItemText
                  primary={`Order #${order.id}`}
                  secondary={`Placed on: ${order.date} | Total: ${order.total}`}
                />
              </ListItemButton>
              {activeOrder?.id === order.id && (
                <Paper sx={{ padding: "15px", marginY: "10px" }}>
                  <Grid container spacing={2}>
                    {/* Toolbar for Actions */}
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<DownloadIcon />}
                          onClick={() => handleDownload(order)}
                        >
                          Download
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<PrintIcon />}
                          onClick={() => handlePrint(order)}
                        >
                          Print
                        </Button>
                      </Stack>
                    </Grid>

                    {/* Order ID */}
                    <Grid item xs={12}>
                      {loading ? (
                        <Skeleton variant="text" width="80%" height={40} />
                      ) : (
                        <Typography variant="body2">Order ID: {order.id}</Typography>
                      )}
                    </Grid>

                    {/* Date */}
                    <Grid item xs={12}>
                      {loading ? (
                        <Skeleton variant="text" width="80%" height={40} />
                      ) : (
                        <Typography variant="body2">Date: {order.date}</Typography>
                      )}
                    </Grid>

                    {/* Total */}
                    <Grid item xs={12}>
                      {loading ? (
                        <Skeleton variant="text" width="80%" height={40} />
                      ) : (
                        <Typography variant="body2">Total: {order.total}</Typography>
                      )}
                    </Grid>

                    {/* Square Skeleton for Product Image */}
                    <Grid item xs={12} sm={4}>
                      {loading ? (
                        <Skeleton variant="rectangular" width={150} height={150} />
                      ) : (
                        <Box
                          sx={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: "#f0f0f0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={order.image}
                            alt={`Order ${order.id}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default OrderHistory;