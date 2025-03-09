import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Layout.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip from "@mui/material/Tooltip";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import WorkspacePremiumSharpIcon from "@mui/icons-material/WorkspacePremiumSharp";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
import WorkHistorySharpIcon from "@mui/icons-material/WorkHistorySharp";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close, Dashboard, ShoppingCart } from "@mui/icons-material";

const Layout = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const NAVIGATION = [
    {
      section: "My Account",
      items: [
        { title: "Profile", icon: <Dashboard />, route: "/Profile" },
        { title: "Orders", icon: <WorkHistorySharpIcon />, route: "/Orders" },
      ],
    },
    {
      section: "Essentials",
      items: [
        { title: "Wishlist", icon: <FavoriteSharpIcon />, route: "/Wish" },
        { title: "Cart", icon: <ShoppingCart />, route: "/Cart" },
        { title: "Best Seller", icon: <WorkspacePremiumSharpIcon />, route: "/BestSeller" },
      ],
    },
    {
      section: "Engage With Us",
      items: [
        { title: "Sell Your Product", icon: <CurrencyRupeeSharpIcon />, route: "/Sell" },
        { title: "Review", icon: <VisibilityIcon />, route: "/Review" },
        { title: "About us", icon: <InfoIcon />, route: "/Aboutus" },
      ],
    },
  ];

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="More option">
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)} sx={{ marginLeft: 1, marginRight: 1, color: "white", "&:hover": { opacity: 0.6 } }}>
                <Menu />
              </IconButton>
            </Tooltip>
            <ul className="nav-list">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/Aboutus" className="nav-link">About us</Link></li>
              <li className="nav-item"><Link to="/store" className="nav-link">Store</Link></li>
              <Tooltip title="Cart">
                <Link to="/cart" className="nav-link" aria-label="Cart"><ShoppingCartOutlinedIcon /></Link>
              </Tooltip>
            </ul>
          </Box>
          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>Tech Trove Ⓣ</Typography>
          </Box>
          <div className="nav-right">
            <li className="nav-item-right"><Link to="/Login" className="special-link">Login</Link></li>
            <li className="nav-item-right"><Link to="/Signup" className="special-link">Signup</Link></li>
          </div>
        </Box>
      </nav>

      <Drawer sx={{ "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" } }} anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} color="inherit"><Close /></IconButton>
        </Box>
        <List>
          {NAVIGATION.map((section, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ pl: 2, fontWeight: "bold", color: theme.palette.text.secondary }}>{section.section}</Typography>
              <Divider />
              {section.items.map((item, idx) => (
                <ListItem button key={idx} onClick={() => navigate(item.route)}>
                  <IconButton edge="start" color="inherit" aria-label={item.title}>{item.icon}</IconButton>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ mt: 0, p: 0 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
