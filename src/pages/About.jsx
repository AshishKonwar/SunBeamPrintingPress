import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import teamImage from "../assets/pictures/crew_members.jpg"; // 👈 replace with your group photo

export default function About() {
  return (
    <Box sx={{ mt: { xs: 0, md: 6 }, background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)", minHeight: "100vh", py: 7 }}>
      <Container maxWidth="lg">

        {/* Heading */}
         <Typography
            variant="h5"
            sx={{
                            textAlign: "center",
                            fontWeight: 700,
                            color: "white",
                            mb: 9,
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

      </Container>
    </Box>
  );
}