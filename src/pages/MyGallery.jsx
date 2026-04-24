import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

// Import all images from pictures folder
import img2a from "../assets/pictures/2a.jpg";
import img2b from "../assets/pictures/2b.jpg";
import img2c from "../assets/pictures/2c.jpg";
import img2d from "../assets/pictures/2d.jpg";
import imgBooks1 from "../assets/pictures/books1.JPG";
import imgBooks2 from "../assets/pictures/books2.JPG";
import imgBooks3 from "../assets/pictures/books3.JPG";
import imgBooks4 from "../assets/pictures/books4.JPG";
import imgBooks5 from "../assets/pictures/books5.JPG";
import imgCollage1 from "../assets/pictures/collagepic01.jpg";
import imgCollage2 from "../assets/pictures/collagepic02.jpg";
import imgCollage3 from "../assets/pictures/collagepic03.jpg";
import imgCollage4 from "../assets/pictures/collagepic04.jpg";
import imgCollage5 from "../assets/pictures/collagepic05.jpg";
import imgCrew from "../assets/pictures/crew_members.jpg";
import imgHero from "../assets/pictures/hero.png";
import img10 from "../assets/pictures/image10.jpg";
import img11 from "../assets/pictures/image11.jpg";
import img12 from "../assets/pictures/image12.jpg";
import img13 from "../assets/pictures/image13.jpg";
import img14 from "../assets/pictures/image14.jpg";
import img15 from "../assets/pictures/image15.jpg";
import img16 from "../assets/pictures/image16.jpg";
import img17 from "../assets/pictures/image17.jpg";
import img18 from "../assets/pictures/image18.jpg";
import img5 from "../assets/pictures/image5.jpg";
import img6 from "../assets/pictures/image6.jpg";
import img7 from "../assets/pictures/image7.jpg";
import img8 from "../assets/pictures/image8.jpg";
import img9 from "../assets/pictures/image9.jpg";
import imgIMG4919 from "../assets/pictures/IMG_4919.jpg";
import imgIMG4920 from "../assets/pictures/IMG_4920.jpg";
import imgIMG4931 from "../assets/pictures/IMG_4931.jpg";
import imgIMG4934 from "../assets/pictures/IMG_4934.jpg";
import imgIMG4935 from "../assets/pictures/IMG_4935.jpg";
import imgIMG4936 from "../assets/pictures/IMG_4936.jpg";
import imgIMG4939 from "../assets/pictures/IMG_4939.jpg";
import imgIMG4953 from "../assets/pictures/IMG_4953.jpg";
import imgIMG5164 from "../assets/pictures/IMG_5164.jpg";
import imgIMG5174 from "../assets/pictures/IMG_5174.jpg";
import imgIMG5176 from "../assets/pictures/IMG_5176.jpg";
import imgIMG5242 from "../assets/pictures/IMG_5242.jpg";
import imgMOPM from "../assets/pictures/MOPM.jpg";
import imgMOPM02 from "../assets/pictures/MOPM02.jpg";
import imgMOPM03 from "../assets/pictures/MOPM03.jpg";
import imgPhotos1 from "../assets/pictures/photos_1.png";
import imgPhotos2 from "../assets/pictures/photos_2.png";
import imgPhotos3 from "../assets/pictures/photos_3.png";
import imgPhotos4 from "../assets/pictures/photos_4.png";
import imgPhotos5 from "../assets/pictures/photos_5.png";
import imgPhotos6 from "../assets/pictures/photos_6.png";
import imgPoster1 from "../assets/pictures/POSTER_1.png";
import imgPoster2 from "../assets/pictures/POSTER_2.png";
import imgPoster3 from "../assets/pictures/POSTER_3.png";
import imgLeaflets1 from "../assets/pictures/LEAFLETS_1.png";
import imgLeaflets2 from "../assets/pictures/LEAFLETS_2.png";

export default function MyGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  // All gallery images with categories
  const allImages = [
    { id: 1, image: imgMOPM, category: "Infrastructure", title: "Komori Lithrone Printing" },
    { id: 2, image: imgMOPM02, category: "Infrastructure", title: "Sheetfed Offset Bicolour" },
    { id: 3, image: imgMOPM03, category: "Infrastructure", title: "Sheetfed Offset Monocolour" },
    { id: 4, image: img2a, category: "Infrastructure", title: "CTP System" },
    { id: 5, image: img2b, category: "Infrastructure", title: "CTP Processor" },
    { id: 6, image: img2c, category: "Infrastructure", title: "Pre Press Technology" },
    { id: 7, image: img2d, category: "Infrastructure", title: "Plate Making" },
    { id: 8, image: img5, category: "Products", title: "Digital Printing" },
    { id: 9, image: img6, category: "Infrastructure", title: "Konica Minolta" },
    { id: 10, image: img7, category: "Infrastructure", title: "Digital Mono" },
    { id: 11, image: img8, category: "Infrastructure", title: "Lamination Machine" },
    { id: 12, image: img9, category: "Infrastructure", title: "Finishing Equipment" },
    { id: 13, image: img10, category: "Infrastructure", title: "Binding Machine" },
    { id: 14, image: img11, category: "Infrastructure", title: "Cutting Machine" },
    { id: 15, image: img12, category: "Infrastructure", title: "Folding Machine" },
    { id: 16, image: img13, category: "Infrastructure", title: "Packaging Equipment" },
    { id: 17, image: img14, category: "Infrastructure", title: "Press Floor" },
    { id: 18, image: img15, category: "Infrastructure", title: "Production Area" },
    { id: 19, image: img16, category: "Infrastructure", title: "Storage" },
    { id: 20, image: img17, category: "Infrastructure", title: "Quality Check" },
    { id: 21, image: img18, category: "Infrastructure", title: "Dispatch" },
    { id: 22, image: imgBooks1, category: "Products", title: "Books" },
    { id: 23, image: imgBooks2, category: "Products", title: "Magazines" },
    { id: 24, image: imgBooks3, category: "Products", title: "Catalogues" },
    { id: 25, image: imgBooks4, category: "Products", title: "Brochures" },
    { id: 26, image: imgBooks5, category: "Products", title: "Publications" },
    { id: 27, image: imgPoster1, category: "Products", title: "Posters" },
    { id: 28, image: imgPoster2, category: "Products", title: "Posters" },
    { id: 29, image: imgPoster3, category: "Products", title: "Posters" },
    { id: 30, image: imgLeaflets1, category: "Products", title: "Leaflets" },
    { id: 31, image: imgLeaflets2, category: "Products", title: "Leaflets" },
    { id: 32, image: imgPhotos1, category: "Products", title: "Print Samples" },
    // { id: 33, image: imgPhotos2, category: "Products", title: "Print Samples" },
    { id: 34, image: imgPhotos3, category: "Products", title: "Print Samples" },
    // { id: 35, image: imgPhotos4, category: "Products", title: "Print Samples" },
    { id: 36, image: imgPhotos5, category: "Products", title: "Complete Press Solutions" },
    { id: 37, image: imgPhotos6, category: "Products", title: "Complete Press Solutions" },
    { id: 39, image: imgIMG4920, category: "Products", title: "Finished Work" },
    // { id: 40, image: imgIMG4931, category: "Products", title: "Finished Work" },
    // { id: 41, image: imgIMG4934, category: "Products", title: "Finished Work" },
    // { id: 42, image: imgIMG4935, category: "Products", title: "Finished Work" },
    // { id: 43, image: imgIMG4936, category: "Products", title: "Finished Work" },
    // { id: 44, image: imgIMG4939, category: "Products", title: "Finished Work" },
    // { id: 45, image: imgIMG4953, category: "Products", title: "Finished Work" },
    // { id: 46, image: imgIMG5164, category: "Products", title: "Finished Work" },
    // { id: 47, image: imgIMG5174, category: "Products", title: "Finished Work" },
    // { id: 48, image: imgIMG5176, category: "Products", title: "Finished Work" },          
    // { id: 49, image: imgIMG5242, category: "Products", title: "Finished Work" },
    { id: 50, image: imgCollage1, category: "Infrastructure", title: "Our Team" },
    { id: 51, image: imgCollage2, category: "Infrastructure", title: "Team Collaboration" },
    { id: 52, image: imgCollage3, category: "Infrastructure", title: "Team Work" },
    { id: 53, image: imgCollage4, category: "Infrastructure", title: "Staff" },
    { id: 54, image: imgCollage5, category: "Infrastructure", title: "Workforce" },
    { id: 55, image: imgCrew, category: "Team", title: "Crew Members" },
  ];

  const categories = ["all", "Infrastructure", "Products", "Team"];

  const filteredImages = filter === "all" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  const handleOpen = (image) => {

     console.log("Selected Image ID:", image.id); // ✅ log ID
      console.log("Full Object:", image); // optional (useful)
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ mt: { xs: 0, md: 6 }, background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)", minHeight: "100vh", py: 7 }}>
      <Container maxWidth="lg">
        {/* Title */}
         <Typography
                variant="h5"
                sx={{
                                  textAlign: "center",
                                  fontWeight: 700,
                                  color: "white",
                                  mt: 3,
                                  mb: 3,
                                }}
                              >
          Our Gallery
        </Typography>

        <Typography
                          sx={{
                              textAlign: "center",
                              color: "#4fc3f7",
                              mb: 5,
                            }}
                          >
          A glimpse of our work, infrastructure, and finished products.
        </Typography>

        {/* Category Filter */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
  <ToggleButtonGroup 
    value={filter}
    exclusive
    onChange={handleFilterChange}
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 2,
    }}
  >
    {categories.map((cat) => (
      <ToggleButton
        key={cat}
        value={cat}
        sx={{
          px: 3.5,
          py: 1.2,
          borderRadius: "30px",
          textTransform: "capitalize",
          fontWeight: 500,
          letterSpacing: "0.3px",
          border: "1px solid rgba(255,255,255,0.8)",

          color: "rgba(255,255,255,0.8)",
          background: "rgba(255,255,255,0.05)",

          transition: "all 0.3s ease",

          "&:hover": {
            background: "rgba(79,195,247,0.15)",
            color: "#ffffff",
            transform: "translateY(-2px)",
            border: "1px solid #ffffff", // ✅ PURE WHITE BORDER
          },

          "&.Mui-selected": {
            background: "linear-gradient(135deg, #4fc3f7, #01A9D8)",
            color: "#fff",
            border: "none",
            boxShadow: "0 5px 20px rgba(255, 255, 255, 0.5)",
          },

          "&.Mui-selected:hover": {
            background: "linear-gradient(135deg, #4fc3f7, #01A9D8)",
          },
        }}
      >
        {cat}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredImages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
  onClick={() => handleOpen(item)}
  sx={{
    background: "rgba(255,255,255,0.05)",
    borderRadius: 2,
    overflow: "hidden",
    cursor: "pointer", // ✅ pointer cursor
    transition: "all 0.35s ease",
    
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)", // 🔥 lift + slight zoom
      boxShadow: "0 15px 40px rgba(0,0,0,0.4)", // 🔥 stronger shadow
    },

    "&:hover img": {
      transform: "scale(1.08)", // 🔥 image zoom inside
    },

    "&:hover .zoom-icon": {
      opacity: 1,
    },
  }}
>
  <Box sx={{ position: "relative" }}>
      <CardMedia
      component="img"
      image={item.image}
      alt="gallery"
      sx={{
        height: 250,
        objectFit: "cover",
        transition: "transform 0.4s ease", // ✅ smooth zoom
      }}
    />

    <Box
      className="zoom-icon"
      sx={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "0.3s",
      }}
    >
      <ZoomInIcon sx={{ fontSize: 50, color: "white" }} />
    </Box>
  </Box>
</Card>
            </Grid>
          ))}
        </Grid>

        {/* Image Popup Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          PaperProps={{
            sx: {
              background: "rgba(5, 17, 33, 0.95)",
              borderRadius: 3,
              border: "1px solid rgba(79, 195, 247, 0.3)",
              maxWidth: "90vw",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              zIndex: 1,
              background: "rgba(0,0,0,0.5)",
              "&:hover": {
                background: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
  <Box sx={{ p: 2 }}>
    <CardMedia
      component="img"
      image={selectedImage.image}
      alt="gallery"
      sx={{
        width: "100%",
        maxHeight: "70vh",
        objectFit: "contain",
        borderRadius: 2,
      }}
    />
  </Box>
)}
        </Dialog>
      </Container>
    </Box>
  );
}