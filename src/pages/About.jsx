import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import teamImage from "../assets/pictures/crew_members.jpg"; // 👈 replace with your group photo
import TrustBadges from "../components/TrustBadges";
import certificate1 from "../assets/pictures/certificate1.jpg";
import certificate2 from "../assets/pictures/certificate2.jpg";


export default function About() {
  const guidingPrinciples = [
    "Commitment to Quality",
    "Timely and Reliable Delivery",
    "Customer-Centric Approach",
    "Transparency in Work",
    "Continuous Improvement and Innovation",
  ];

  const customers = [
    "Government departments",
    "Semi-government organisations",
    "Educational institutions",
    "Corporate businesses",
    "Publishers",
  ];

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

    const [open, setOpen] = useState(false);
      const [selectedCert, setSelectedCert] = useState(null);
    
      const handleOpen = (cert) => {
        setSelectedCert(cert);
        setOpen(true);
      };
    

  return (
    <>
      <Box sx={{ mt: { xs: 0, md: 6 }, background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)", minHeight: "100vh", py: 7 }}>
      <Container maxWidth="lg">

        {/* Heading */}
         <Typography
            variant="h5"
            sx={{
                            textAlign: "center",
                            fontWeight: 700,
                            color: "white",
                            mt: 3,
                            mb: 6,
                          }}
                        >
          About Sun Beam Printing Press
        </Typography> 

        {/* Big Image */}
        <Box
          component="img"
          src={teamImage}
          alt="Sun Beam Printing Press Team"
          sx={{
            width: "100%",
            height: { xs: 300, md: 500 },
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            mb: 6,
          }}
        />

        {/* Content */}
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            <strong>Sun Beam Printing Press</strong> was established in{" "}
            <strong>2007</strong> with a vision to provide reliable and high
            quality printing services. Over the years, the press has steadily
            expanded its infrastructure and adopted modern printing
            technologies, including advanced offset, digital, and finishing
            systems.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
              mt: 3,
            }}
          >
            Today, <strong>Sun Beam Printing Press</strong> serves a wide range
            of clients including businesses, institutions, publishers, and
            organisations, delivering consistent quality and dependable service
            across every project.
          </Typography>
        </Box>

        {/* Mission Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            At Sun Beam Printing Press, our mission is to deliver high-quality printing solutions that combine precision, efficiency, and reliability. We aim to support businesses, institutions, and government organisations with consistent output, timely delivery, and a smooth, hassle-free experience. Through continuous improvement and the use of advanced printing technology, we strive to meet and exceed customer expectations in every project we undertake.
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            Our vision is to become one of the most trusted and preferred printing partners in Assam, known for quality, professionalism, and long-term client relationships. We aspire to grow by adopting modern technologies, strengthening our capabilities, and expanding our reach while maintaining the values of integrity, consistency, and customer satisfaction.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Quality Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              lineHeight: 1.9,
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            We are committed to maintaining the highest standards of quality in every stage of our work, from pre-press to final delivery. By using advanced machinery, skilled manpower, and strict quality control processes, we ensure that every product meets defined specifications and client expectations. Our focus remains on continuous improvement, timely execution, and building long-term trust with our clients.
          </Typography>
        </Box>

        {/* Guiding Principles Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 9,
          }}
        >
          {guidingPrinciples.map((principle, index) => (
            <Box
              key={index}
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
                whiteSpace: "nowrap",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(79, 195, 247, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 18 }} />

              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.8rem", md: "0.95rem" },
                  fontWeight: 500,
                }}
              >
                {principle}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Our Customers Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Our Customers
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {customers.map((customer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    height: "100%",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {customer}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications Section */}
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#4fc3f7",
              mb: 3,
            }}
          >
            Certifications
          </Typography>
          <Card
            sx={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              border: "1px solid rgba(79, 195, 247, 0.3)",
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, p: 3 }}>
              <WorkspacePremiumIcon sx={{ color: "#4fc3f7", fontSize: 40 }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Sun Beam Printing Press is <strong style={{ color: "#4fc3f7" }}>Unnati Certified</strong>, reflecting our commitment to maintaining high standards of quality, operational efficiency and professional service delivery.
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Container>

      
 <Box sx={{ maxWidth: 1000, mx: "auto", mt: 10 }}>
  <Grid container spacing={4} justifyContent="center">
    {certificates.map((cert) => (
      <Grid item xs={12} sm={6} md={5} key={cert.id}>
        <Card
          onClick={() => handleOpen(cert)}
          sx={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: 3,
            transition: "0.3s",
            border: "1px solid rgba(79, 195, 247, 0.3)",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              borderColor: "#4fc3f7",
            },
          }}
        >
          <CardMedia
            component="img"
            image={cert.image}
            alt={cert.title}
            sx={{
              height: { xs: 240, md: 300 },
              objectFit: "contain",
              background: "rgba(255,255,255,0.02)",
              p: 2,
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
</Box>
    </Box>

    </>
  );
}