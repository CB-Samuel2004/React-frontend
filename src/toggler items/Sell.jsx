import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Alert,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import l1 from "../images/sell/co.jpg";
import l2 from "../images/sell/s1.jpg";
import l3 from "../images/sell/s2.jpg";
import l4 from "../images/sell/s3.jpg";
import l5 from "../images/sell/s4.jpg";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Sell = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [specification, setSpecification] = useState("");
  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [errors, setErrors] = useState({
    category: false,
    title: false,
    price: false,
    specification: false,
    images: false,
  });

  const uploadRef = useRef(null);

  const handleUpload = (event) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...uploadedImages]);
      setErrors((prev) => ({ ...prev, images: false }));
    }
  };

  const handleDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const validateFields = () => {
    const newErrors = {
      category: category === "",
      title: title === "",
      price: price === "",
      specification: specification === "",
      images: images.length === 0,
    };
    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleConfirm = () => {
    if (validateFields()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      setCategory("");
      setTitle("");
      setPrice("");
      setSpecification("");
      setImages([]);
    }
  };

  const scrollToUpload = () => {
    if (uploadRef.current) {
      uploadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      {/* Carousel Section */}
      <Box
        sx={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${l1}) no-repeat center/cover`,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Become a TechTrove Seller
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Pay lesser selling fee* with every order on India's most visited
          online shopping destination
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
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
          onClick={scrollToUpload}
        >
          Get Started
        </Button>
      </Box>

      {/* How to Sell Section */}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          How to sell on TechTrove?
        </Typography>
        <Grid container spacing={8} justifyContent="center">
          {[
            {
              title: "STEP 1: Register your account",
              description:
                "Register on TechTrove by clicking the Signup or Login button",
              img: l2,
            },
            {
              title: "STEP 2: List your products",
              description:
                "List your products by providing product and brand details",
              img: l3,
            },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={step.img}
                  alt={step.title}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {step.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={8} justifyContent="center" sx={{ mt: 2 }}>
          {[
            {
              title: "STEP 3: Upload your products",
              description:
                "Click confirm after providing product and brand details",
              img: l4,
            },
            {
              title: "STEP 4: Complete orders & get paid",
              description:
                "Deliver orders to customers on time and get paid within 7 days of delivery.",
              img: l5,
            },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={step.img}
                  alt={step.title}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {step.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Upload Section */}
      <Box
        ref={uploadRef}
        sx={{
          backgroundColor: "#f5f5f5",
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Add Your Product Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          mt={4}
          sx={{ textAlign: "center" }}
        >
          Add Your Product
        </Typography>
        <Box sx={{ p: 2 }}>
          {/* Alert */}
          {showAlert && (
            <Alert variant="outlined" severity="success" sx={{ mb: 2 }}>
              Product added to the store
            </Alert>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              width: "100%",
            }}
          >
            {/* Left Side: Card */}
            <Card
              sx={{
                width: 300,
                height: 400,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flex: 1, overflow: "auto" }}>
                {images.length > 0 ? (
                  <Stack spacing={2}>
                    {images.map((image, index) => (
                      <Box key={index} sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="150"
                          image={image}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          sx={{
                            position: "absolute",
                            top: 5,
                            right: 5,
                            fontSize: 10,
                            padding: "4px 8px",
                          }}
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Typography variant="h6" align="center">
                    No Images Uploaded
                  </Typography>
                )}
                {errors.images && (
                  <Typography variant="body2" color="error" align="center">
                    At least one image is required.
                  </Typography>
                )}
              </CardContent>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ p: 2 }}
              >
                {/* Upload Button */}
                <Button
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
                      boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
                    },
                  }}
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput
                    type="file"
                    multiple
                    onChange={handleUpload}
                  />
                </Button>
              </Stack>
            </Card>

            {/* Right Side: Form */}
            <Box
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {/* Category Dropdown */}
              <Select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setErrors((prev) => ({ ...prev, category: false }));
                }}
                displayEmpty
                fullWidth
                error={errors.category}
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                <MenuItem value="Laptop">Laptop</MenuItem>
                <MenuItem value="Mobile">Mobile</MenuItem>
                <MenuItem value="Tablet">Tablet</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
              </Select>
              {errors.category && (
                <Typography variant="body2" color="error">
                  Category is required.
                </Typography>
              )}
              {/* Text Fields */}
              <TextField
                label="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setErrors((prev) => ({ ...prev, title: false }));
                }}
                fullWidth
                error={errors.title}
                helperText={errors.title && "Title is required."}
              />
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  setErrors((prev) => ({ ...prev, price: false }));
                }}
                fullWidth
                error={errors.price}
                helperText={errors.price && "Price is required."}
              />
              <TextField
                label="Specification"
                value={specification}
                onChange={(e) => {
                  setSpecification(e.target.value);
                  setErrors((prev) => ({ ...prev, specification: false }));
                }}
                multiline
                rows={4}
                fullWidth
                error={errors.specification}
                helperText={
                  errors.specification && "Specification is required."
                }
              />
              {/* Confirm Button */}
              <Button
                variant="contained"
                onClick={handleConfirm}
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
                    boxShadow: "0 0 2px 5px rgba(10, 15, 16, 0.97)",
                  },
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sell;
