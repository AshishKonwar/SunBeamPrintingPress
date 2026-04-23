import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/* 🔽 Images */
import image1 from "../assets/pictures/books5.JPG";
import image4 from "../assets/pictures/books4.JPG";
import image6 from "../assets/pictures/image5.jpg";

/* 🔽 VIDEO */
import video from "../assets/videos/SunBeamVideo.MP4";
Z
/* 🔽 Data */
const featuredCollections = [
  {
    id: 1,
    title: "Multicolour Offset Printing",
    image: image4,
    description:
      "High volume, high quality printing using advanced Komori offset technology.",
  },
  {
    id: 2,
    title: "Corporate & Commercial Printing",
    image: image6,
    description:
      "Reliable printing solutions for offices, institutions, and organisations.",
  },
  {
    id: 3,
    title: "Finishing & Binding",
    image: image1,
    description:
      "Professional finishing that enhances durability and presentation.",
  }
];

function OurServicesCarousel() {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 8 },
        background: "linear-gradient(180deg, #061727 0%, #04101c 100%)",
      }}
    >
      <Container maxWidth="xl">

        {/* 🔥 VIDEO SECTION */}
        <Box
          sx={{
            mb: 5,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <Box
            component="video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            sx={{
              width: "100%",
              height: { xs: 200, md: 400 },
              objectFit: "cover",
            }}
          />
        </Box>

        {/* 🔥 TITLE */}
        <Typography
          sx={{
            mb: 3,
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "16px", md: "24px" },
          }}
        >
          Our Services
        </Typography>

        {/* 🔥 GRID */}
        <Grid container spacing={2}>
          {featuredCollections.map((collection) => (
            <Grid item xs={4} sm={4} md={4} key={collection.id}>
              
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#00bcd4",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={collection.image}
                  alt={collection.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 90, md: 180 },
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />

                {/* CONTENT */}
                <CardContent sx={{ p: { xs: 1, md: 2 } }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: "#00bcd4",
                      fontSize: { xs: "10px", md: "16px" },
                    }}
                  >
                    {collection.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "9px", md: "14px" },
                      opacity: 0.85,
                      lineHeight: 1.4,
                      color: "#fff",
                    }}
                  >
                    {collection.description}
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

        {/* 🔥 BUTTON */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            component={RouterLink}
            to="/services"
            variant="contained"
            size="small"
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 700,
              color: "#fff",
              background: "#01A9D8",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            See More
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default React.memo(OurServicesCarousel);