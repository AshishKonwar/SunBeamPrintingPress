import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Modal,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import { InstagramEmbed } from "react-social-media-embed";

import insta_image01 from "../assets/pictures/Insta_image01.jpeg";
import insta_image02 from "../assets/pictures/Insta_image02.jpeg";
import insta_image03 from "../assets/pictures/Insta_image03.jpeg";
import insta_image05 from "../assets/pictures/Insta_image05.jpeg";
import insta_image06 from "../assets/pictures/Insta_image06.jpeg";

const images = [
  { src: insta_image01, postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DOlTXerEu6E/", handle: "@sunbeamprintingpress" },
  { src: insta_image02, postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DP4Llxsks_6/", handle: "@sunbeamprintingpress" },
  { src: insta_image03, postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DUssIghkqnB/", handle: "@sunbeamprintingpress" },
  { src: insta_image06, postUrl: "https://www.instagram.com/sunbeamprintingpress/p/DRm028cEmb3/", handle: "@sunbeamprintingpress" },
  { src: insta_image05, postUrl: "https://www.instagram.com/monikut_publication/p/DSoegl8k5W3/", handle: "@sunbeamprintingpress" }
];

export default function UGCGallery() {
  const [open, setOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const handleOpen = (url) => {
    setActivePost(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActivePost(null);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#051121" }}>
      <Container maxWidth="xl">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 2, md: 3 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#fbfbf9e8",
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Where your ideas come to life in print
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#fbfbf9e8",
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            <strong>#sunbeamprintingpress</strong>
          </Typography>
        </Box>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {images.map((item, idx) => (
            <Box
              key={idx}
              onClick={() => handleOpen(item.postUrl)}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "1/1", // 🔥 keeps square responsive
                "&:hover .overlay": { opacity: 1 },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={item.src}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "0.3s",
                  color: "white",
                }}
              >
                <InstagramIcon sx={{ fontSize: { xs: 28, md: 36 } }} />
                <Typography sx={{ fontSize: { xs: 12, md: 14 } }}>
                  {item.handle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black",
            p: { xs: 1.5, md: 2 },
            borderRadius: 2,
            outline: "none",
            width: { xs: "95%", sm: 400, md: 450 },
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 6,
              right: 6,
              color: "white",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Instagram Embed */}
          {activePost && (
            <Box sx={{ mt: 3 }}>
              <InstagramEmbed url={activePost} width="100%" />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}