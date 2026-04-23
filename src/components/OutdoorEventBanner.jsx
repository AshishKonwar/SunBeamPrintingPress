import { 
  Box, 
  Container, 
  Typography, 
  Stack,
  Button,
} from "@mui/material";
import { useMemo, useState } from "react";
import OurServicesCarousel from "./OurServicesCarousel";
import heroImage1 from "../assets/pictures/collagepic01.jpg";
import heroImage2 from "../assets/pictures/collagepic02.jpg";
import heroImage3 from "../assets/pictures/collagepic03.jpg";
import heroImage4 from "../assets/pictures/collagepic04.jpg";
import heroImage5 from "../assets/pictures/collagepic05.jpg";
import { Link as RouterLink } from "react-router-dom";
import OurInfrastuctureSection from "./OurInfrastructureSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OutdoorEventBanner() {
  const [activeTab, setActiveTab] = useState(0); 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [customQuery, setCustomQuery] = useState("");

  const presetQueries = useMemo(() => [
    "Books & Magazines",
    "Posters & Banners",
    "Binding & Laminating",
    "Digital Printing",
    "Packaging & Labels",
    "Custom Request"
  ], []);

  const handleTabChange = (event, newValue) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    setActiveTab(newValue);
  };

  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  };

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { fullName, email, phone, selectedQuery, customQuery };
    // eslint-disable-next-line no-console
    console.log("Submitted inquiry:", payload);
    handleCloseDialog();
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedQuery("");
    setCustomQuery("");
  };

  const tabs = [
    "Signage",
    "Clothing", 
    "Marketing essentials",
    "Giveaways & swag",
    "Packaging"
  ];

  return (
    <>
      <Box sx={{ py: { xs: 6, sm: 8, md: 12, lg: 15 }, bgcolor: "#051121" }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center"
          }}>
            <Box textAlign="left">  
           <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#fbfbf9e8",
              }}
            >
              Reliable Offset{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 900,
                  color: "#01A9D8",
                  mx: 0.5,
                  fontSize: "1.0em"
                }}
              >
                &
              </Box>{" "}
              Digital Printing Solutions
            </Typography>

          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 900,
              display: "block",
              color: "#01A9D8", 
              letterSpacing: 1,
            }}
          >
            Sun Beam Printing Press
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#fbfbf9e8",
              lineHeight: 1.8,
              maxWidth: 600,
              mt: 3,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Serving <strong>businesses, institutions, publishers, and organizations</strong> 
            with <strong>high quality printing</strong> since <em>2007</em>.
          </Typography>
          <Box sx={{ mt: 3 }}>

            <Stack 
              direction="row" 
              justifyContent="normal" 
              alignItems="center"
              sx={{ width: "100%" }}
              gap={3}
            >
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: "#fff",
                  background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 custom teal gradient
                  transition: "transform 200ms ease, box-shadow 200ms ease, background 200ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 6,
                    background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 darker hover gradient
                    color: "#fff"
                  },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Box>
        </Box>
            <Box sx={{ 
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}>
              <Box
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                <Slider {...sliderSettings}>
                  {heroImages.map((img, index) => (
                    <Box key={index}>
                      <Box
                        component="img"
                        src={img}
                        alt={`hero-${index}`}
                        sx={{
                          width: "100%",
                          height: 400,
                          objectFit: "cover"
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
          </Box>
             </Box>
          </Box>
        </Container>
      </Box>

      <OurInfrastuctureSection />
      <OurServicesCarousel />
    </>
  );
}
