import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useSwipeable } from "react-swipeable";

import image1 from "../assets/pictures/IMG_4919.jpg";
import image2 from "../assets/pictures/IMG_4920.jpg";
import image3 from "../assets/pictures/books3.JPG";
import image4 from "../assets/pictures/books4.JPG";
import poster1 from "../assets/pictures/POSTER_1.png";
import poster2 from "../assets/pictures/POSTER_2.png";
import poster3 from "../assets/pictures/POSTER_3.png";
import leaflet1 from "../assets/pictures/LEAFLETS_1.png";
import leaflet2 from "../assets/pictures/LEAFLETS_2.png";
import photos5 from "../assets/pictures/photos_5.png";
import photos6 from "../assets/pictures/photos_6.png";
import photos7 from "../assets/pictures/books1.JPG";
import photos8 from "../assets/pictures/books2.JPG";
import photos9 from "../assets/pictures/books3.JPG";
import photos10 from "../assets/pictures/books4.JPG";
import photos12 from "../assets/pictures/image11.jpg";
import photos13 from "../assets/pictures/image12.jpg";
import photos14 from "../assets/pictures/image13.jpg";
import photos15 from "../assets/pictures/image15.jpg";
import photos16 from "../assets/pictures/image10.jpg";
import photos18 from "../assets/pictures/IMG_4939.jpg";
import photos19 from "../assets/pictures/IMG_4935.jpg";
import photos20 from "../assets/pictures/image11.jpg";

const services = [
  {
    title: "Multicolour Offset Printing",
    images: [photos7, photos8, photos9, photos10],
    about:
      "High volume, high quality printing using advanced Komori offset technology.",
    items: ["Books, magazines, brochures, catalogues"],
  },
  {
    title: "Digital Printing (Colour & Mono)",
    images: [leaflet1, leaflet2, photos18, photos19],
    about:
      "Fast and flexible printing for urgent and small quantity requirements.",
    items: ["Flyers, certificates, documents"],
  },
  {
    title: "Complete Press Solutions",
    images: [photos5, photos6],
    about:
      "End to end services from design support to final delivery.",
    items: [],
  },
  {
    title: "Finishing & Binding",
    images: [photos16, photos20],
    about:
      "Professional finishing that enhances durability and presentation.",
    items: ["Lamination", "Perfect & Hard Binding"],
  },
  {
    title: "Corporate & Commercial Printing",
    images: [image1, image2, image3, image4],
    about:
      "Reliable printing solutions for offices, institutions, and organisations.",
    items: ["Letterheads, reports, catalogues"],
  },
  {
    title: "Event & Promotional Materials",
    images: [poster1, poster2, poster3],
    about:
      "Print materials designed for visibility and impact.",
    items: ["Posters, banners, flyers"],
  },
  {
    title: "Custom Printing Solutions",
    images: [photos12, photos13, photos14, photos15],
    about:
      "Tailor made printing based on size, material, finish, and quantity.",
    items: [],
  },
];

export default function ServicesPage() {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ✅ Optimized handlers */
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  }, [currentImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  }, [currentImages]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openGallery) return;

      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape") setOpenGallery(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openGallery, handleNext, handlePrev]);

  return (
    <Box
      sx={{
        mt: { xs: 0, md: 6 },
        py: 7,
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
      }}
    >
      {/* 🔥 IMAGE DIALOG */}
      <Dialog
        open={openGallery}
        onClose={() => setOpenGallery(false)}
        maxWidth="md"
        {...handlers}
        sx={{
          "& .MuiDialog-paper": {
            background: "#000",
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={currentImages[currentIndex]}
            loading="lazy"
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />

          <Box onClick={handlePrev} sx={navBtn("left")}>⬅</Box>
          <Box onClick={handleNext} sx={navBtn("right")}>➡</Box>

          <Box onClick={() => setOpenGallery(false)} sx={closeBtn}>
            ✕
          </Box>
        </Box>
      </Dialog>

      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 9,
          }}
        >
          Our Services
        </Typography>

        {services.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            sx={{
              mb: 10,
              alignItems: "center",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {/* IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                onClick={() => {
                  setCurrentImages(service.images);
                  setCurrentIndex(0);
                  setOpenGallery(true);
                }}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 220, sm: 260, md: 320 },
                  overflow: "hidden",
                  borderRadius: 3,
                  background: "#111",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={service.images[0]}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <ZoomInIcon sx={{ fontSize: 32, color: "#fff" }} />
                </Box>
              </Box>
            </Grid>

            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#01A9D8",
                  mb: 2,
                  typography: { xs: "h6", sm: "h5", md: "h4" },
                }}
              >
                {index + 1}. {service.title}
              </Typography>

              <Typography sx={{ color: "#ddd", mb: 2 }}>
                <strong>About:</strong> {service.about}
              </Typography>

              {service.items.map((item, i) => (
                <Typography key={i} sx={{ color: "#ccc" }}>
                  • {item}
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

/* 🔥 RESPONSIVE NAV BUTTON */
const navBtn = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: { xs: 8, sm: 15 },
  transform: "translateY(-50%)",
  width: { xs: 32, sm: 45 },
  height: { xs: 32, sm: 45 },
  borderRadius: "50%",
  background: "#00AEEF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: { xs: "1rem", sm: "1.3rem" },
  cursor: "pointer",
  opacity: 0.9,
});

/* 🔥 CLOSE BUTTON */
const closeBtn = {
  position: "absolute",
  top: 10,
  right: 15,
  color: "#fff",
  fontSize: "1.4rem",
  cursor: "pointer",
};