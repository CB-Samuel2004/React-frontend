import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import l5 from "../images/rev.png";

// First Card: Customer Reviews Overview
const ReviewsPage: React.FC = () => {
  const [value, setValue] = useState<number | null>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const styles = {
    backgroundContainer: {
      backgroundImage: `url(${l5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      padding: "20px",
      color: "white",
    },
    reviewsContainer: {
      maxWidth: "800px",
      margin: "20px auto",
      backgroundColor: "rgba(241, 8, 8, 0.8)", // Slight opacity for the container to make text readable
      padding: "20px",
      borderRadius: "8px",
    },
    heading: {
      textAlign: "center" as const,
      marginBottom: "20px",
      color: "white",
    },
  };

  const handleReviewSubmit = () => {
    if (value !== null && reviewText.trim()) {
      console.log("Review Submitted!");
      console.log("Rating: ", value);
      console.log("Review Text: ", reviewText);
      setValue(0);
      setReviewText("");
      setIsSubmitted(true); // Set the review as submitted
    } else {
      alert("Please provide a rating and review text.");
    }
  };

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  // Hide the alert after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false); // Hide the alert after 3 seconds
      }, 2000); // 2000ms = 2 seconds

      return () => clearTimeout(timer); // Clean up the timer on unmount or before re-running
    }
  }, [isSubmitted]);

  return (
    <div style={styles.backgroundContainer}>
      {/* Customer Reviews Overview */}
      <Card
        sx={{
          justifyContent: "center",
          width: "100%",
          maxWidth: "800px",
          margin: "20px auto",
          padding: 2,
          boxShadow: "0 4px 8px gold",
          borderRadius: "8px",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <CardContent>
          <h2 style={styles.heading}>Customer Reviews</h2>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "3rem", margin: "0" }}>
                4.5<span style={{ fontSize: "1.5rem", color: "#666" }}>/5</span>
              </h1>
              <div style={{ color: "#f4c542", fontSize: "1.5rem" }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: "0.9rem", color: "white" }}>Average Rating and percentage per views</p>
            </div>
            <div style={{ width: "60%" }}>
              {[91, 75, 45, 25, 14].map((percent, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      backgroundColor: "black",
                      borderRadius: "4px",
                      overflow: "hidden",
                      marginRight: "10px",
                    }}
                  >
                    <div style={{ height: "100%", backgroundColor: "gold", borderRadius: "4px", width: `${percent}%` }}></div>
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "silver" }}>{percent}%</span>
                </div>
              ))}
            </div>
          </Box>
        </CardContent>
      </Card>

      {/* Customer Review Form and Top Reviews Card */}
      <Card
        sx={{
          justifyContent: "center",
          width: "1420px", // Set the width to 100% of the viewport width
          maxWidth: "none", // Disable the maxWidth to ensure full width
          boxShadow: "0 4px 8px gold",
          borderRadius: "15px",
          padding: 3,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (0.5) for desired transparency
          margin: "0", // Remove margin if you want it to touch the sides of the page
        }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: 4, color: "white" }}>
          Reviews
        </Typography>

        {/* Rate and Review Section */}
        <Card
          sx={{
            color: "black",
            justifyContent: "center",
            boxShadow: "0 0 3px 6px black",
            borderRadius: "10px",
            padding: 1,
            transition: "height 0.3s ease",
            height: isExpanded ? "auto" : "200px", // Expand only after selecting a star
            overflow: "hidden",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Rate and Review
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 3 }}>
            Share your experience to help others.
          </Typography>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              if (newValue !== null) setIsExpanded(true); // Expand once rating is selected
            }}
            precision={1}
            sx={{ marginBottom: 3 }}
          />
          {value !== null && (
            <>
              <TextField
                label="Write your review"
                fullWidth
                multiline
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                sx={{
                  marginBottom: 3,
                  display: isExpanded ? "block" : "none", // Hide text field until expanded
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Button
                  sx={{
                    padding: "0.8rem 2rem",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    textTransform: "none",
                    backgroundColor: "black",
                    color: "gold",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "gold",
                      boxShadow: "0 0 2px 5px gold",
                    },
                    "&.Mui-disabled": {
                      color: "gold",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                    },
                  }}
                  onClick={handleReviewSubmit}
                  disabled={!reviewText.trim()}
                >
                  Post Review
                </Button>
              </Box>
            </>
          )}
        </Card>

        {/* Success Alert */}
        {isSubmitted && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Thanks for your feedback.
            </Alert>
          </Stack>
        )}

        {/* Top Reviews Section */}
        <Typography variant="h4" align="center" sx={{ margin: 6, paddingTop: 3, color: "white" }}>
          Top reviews
        </Typography>
        <ReviewCard
          name="John Doe"
          date="6 days ago"
          rating={5}
          review="This product is amazing! It exceeded all my expectations."
        />
        <ReviewCard
          name="Jane Smith"
          date="6 days ago"
          rating={4}
          review="Great quality, but the delivery was a bit slow."
        />
        <ReviewCard
          name="Sam Wilson"
          date="6 days ago"
          rating={3}
          review="It works okay, but I was hoping for better performance."
        />

        {/* View More and Loading Indicator */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? "800ms" : "0ms",
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
          <Button onClick={handleClickLoading} sx={{ m: 2, color: "white", backgroundColor: "black" }}>
            {loading ? "Stop loading" : "View more"}
          </Button>
        </Box>
      </Card>
    </div>
  );
};

// Sub-components for Reviews Section and Review Card
const ReviewCard = ({ name, date, rating, review }: { name: string; date: string; rating: number; review: string }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "red",
    },
    "& .MuiRating-iconHover": {
      color: "red",
    },
    "& .MuiRating-root": {
      marginBottom: -6,
    },
  });

  return (
    <Card
      sx={{
        backgroundColor: "black",
        color: "white",
        boxShadow: "0 4px 8px gold",
        width: "100%",
        margin: "1px",
        paddingBottom: "0px",
        marginTop: "13px",
      }}
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: "0.875rem", marginBottom: 0.5 }}>
          {date}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "right" }}>
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} sx={{ color: index < rating ? "gold" : "gray", marginRight: 0.5 }} />
          ))}
        </Box>
        <Typography variant="body2" sx={{ marginTop: 1, marginBottom: 1 }}>
          {review}
        </Typography>
        <Box sx={{ "& > legend": { mb: 0 } }}>
          <StyledRating
            sx={{ marginBottom: 0, paddingBottom: 0 }}
            name="customized-color"
            defaultValue={0}
            max={1}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewsPage;
