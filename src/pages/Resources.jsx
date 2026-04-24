import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

export default function Resources() {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: 6 },
        py: 5,
        background: "linear-gradient(135deg, #051121, #0a2540, #012a4a)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">

        {/* PAGE TITLE */}
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
          Resources
        </Typography>

        {/* INTRO */}
        <Box sx={{ maxWidth: 900, mx: "auto", mb: 6 }}>
           <Typography
                    sx={{
                      textAlign: "center",
                      color: "#4fc3f7",
                      mb: 5,
                    }}
                  >
            This section provides useful information to help you prepare your designs and understand the printing process better. Whether you are placing a small order or a large-scale project, following these guidelines ensures better results and a smoother workflow.
          </Typography>
        </Box>

        {/* FAQ SECTION */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 3, fontSize: "1.4rem" }}>
          ❓ FAQ
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            {
              q: "What file formats do you accept?",
              a: "We recommend submitting files in PDF format as it preserves layout, fonts, and design elements accurately. Other formats may be accepted depending on the project, but PDF is preferred for best results.",
            },
            {
              q: "What is the ideal resolution for printing?",
              a: "For high-quality printing, files should be prepared at 175 DPI (dots per inch). Lower resolution images may appear blurred or pixelated when printed.",
            },
            {
              q: "Do you handle bulk and large-scale printing projects?",
              a: "Yes, we are equipped with advanced offset printing machines and infrastructure to handle both small and large-volume printing efficiently.",
            },
            {
              q: "Do you undertake government or institutional work?",
              a: "Yes, we regularly work with government departments, semi-government organisations, and institutions, ensuring compliance with required standards and timely delivery.",
            },
            {
              q: "How long does printing take?",
              a: "Turnaround time depends on the type, quantity, and complexity of the project. We always aim to deliver within committed timelines.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ background: "rgba(255,255,255,0.05)" }}>
                <CardContent>
                  <Typography sx={{ color: "#4fc3f7", fontWeight: 600 }}>
                    Q: {item.q}
                  </Typography>
                  <Typography sx={{ color: "#ddd", mt: 1 }}>
                    {item.a}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* DESIGN TIPS */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 2, fontSize: "1.4rem" }}>
          Design Tips
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography sx={{ color: "#ddd", mb: 2 }}>
            Good design plays a crucial role in achieving high-quality print results. Keeping a few key points in mind can significantly improve the final output.
          </Typography>

          <ul style={{ color: "#ddd", lineHeight: 2 }}>
            <li>Use high-resolution images (175 DPI) to ensure clarity</li>
            <li>Design in CMYK color mode instead of RGB for accurate color reproduction</li>
            <li>Maintain proper margins to avoid important content being cut off</li>
            <li>Avoid using very thin lines or very small text</li>
            <li>Embed or outline fonts to prevent font-related issues</li>
          </ul>
        </Box>

        {/* FILE PREPARATION */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 2, fontSize: "1.4rem" }}>
          File Preparation Tips
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography sx={{ color: "#ddd", mb: 2 }}>
            Preparing your files correctly helps avoid delays and ensures that the final printed product matches your expectations.
          </Typography>

          <ul style={{ color: "#ddd", lineHeight: 2 }}>
            <li>Submit files in PDF format whenever possible</li>
            <li>Include a bleed of at least 3mm to allow clean edge cutting</li>
            <li>Convert all text to outlines or embed fonts</li>
            <li>Ensure images are properly linked and not missing</li>
            <li>Double-check layout, spelling, and alignment before submission</li>
          </ul>
        </Box>

        {/* GLOSSARY */}
        <Typography sx={{ color: "#4fc3f7", fontWeight: 700, mb: 3, fontSize: "1.4rem" }}>
          Printing Glossary
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: "Offset Printing",
              desc: "A printing method used for high-volume jobs that delivers consistent and high-quality results, ideal for books, brochures, and catalogues.",
            },
            {
              title: "Digital Printing",
              desc: "A faster printing method suitable for smaller quantities and quick turnaround projects.",
            },
            {
              title: "Bleed",
              desc: "Extra space added around a design to ensure that there are no white edges after cutting.",
            },
            {
              title: "GSM (Grams per Square Meter)",
              desc: "A measurement used to describe paper thickness. Higher GSM indicates thicker paper.",
            },
            {
              title: "Pre-Press",
              desc: "The process of preparing files and plates before actual printing begins.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ background: "rgba(255,255,255,0.05)" }}>
                <CardContent>
                  <Typography sx={{ color: "#4fc3f7", fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#ddd", mt: 1 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}