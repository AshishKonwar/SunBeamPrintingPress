import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloseIcon from "@mui/icons-material/Close";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

// Import your certificate images
import certificate1 from "../assets/pictures/certificate1.jpg";
import certificate2 from "../assets/pictures/certificate2.jpg";

export default function TrustBadges() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  // ✅ Trust badges (same data)
    const trustBadges = [
    {
        id: 1,
        text: "Established in 2007",
        icon: <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 20 }} />,
    },
    {
        id: 2,
        text: "Komori Lithrone Technology",
        icon: <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 20 }} />,
    },
    {
        id: 3,
        text: "Trusted by Government Clients",
        icon: <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 20 }} />,
    },
    {
        id: 4,
        text: "UNNATI Certified",
        icon: <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 20 }} />,
    },
    ];

  // ✅ Updated certificate titles
  const certificates = [
    {
      id: 1,
      title: "UNNATI Registration Certificate",
      description: "Certified Existing Unit under UNNATI 2024",
      image: certificate1,
    },
    {
      id: 2,
      title: "UNNATI Industrial Scheme Certification",
      description: "Approved under Uttar Poorva Industrialization Scheme",
      image: certificate2,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 2,
          }}
        >
          Government & Client Trust
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#4fc3f7",
            mb: 5,
          }}
        >
          Trusted by Government & Institutional Clients
        </Typography>

        {/* Description */}
        <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
            }}
          >
            We undertake printing projects for government departments,
            semi-government organisations, educational institutions, and
            corporate clients with a strong focus on quality, consistency, and
            timely delivery.
          </Typography>
        </Box>

        {/* ✅ BADGES ROW (UPDATED) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 8,
          }}
        >
          {trustBadges.map((badge) => (
            <Box
              key={badge.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: "50px",
                background: "rgba(79, 195, 247, 0.1)",
                border: "1px solid rgba(79, 195, 247, 0.4)",
                backdropFilter: "blur(8px)",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(79, 195, 247, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {badge.icon}
              <Typography
                sx={{
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {badge.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Certificates */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "white",
            mb: 4,
          }}
        >
          Our Certifications
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Card
                onClick={() => handleOpen(cert)}
                sx={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 2,
                  transition: "0.3s",
                  border: "1px solid rgba(79, 195, 247, 0.3)",
                  cursor: "pointer",
                  padding: 2,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    borderColor: "#4fc3f7",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{
                    height: { xs: 220, md: 280 },
                    objectFit: "contain",
                    background: "rgba(255,255,255,0.02)",
                  }}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <VerifiedUserIcon sx={{ color: "#4fc3f7", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      {cert.title}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                    {cert.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Popup */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          PaperProps={{
            sx: {
              background: "rgba(5, 17, 33, 0.95)",
              borderRadius: 3,
              border: "1px solid rgba(79, 195, 247, 0.3)",
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
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedCert && (
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                {selectedCert.title}
              </Typography>

              <CardMedia
                component="img"
                image={selectedCert.image}
                sx={{
                  width: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}