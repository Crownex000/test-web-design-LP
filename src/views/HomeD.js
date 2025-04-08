import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import { motion, useInView } from "motion/react";

const styles = {
  container: {
    p: 4,
    background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#343a40",
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
  indicators: (activeIndex, index) => ({
    width: { xs: 50, md: 80 },
    height: { xs: 20, md: 60 },
    objectFit: "cover",
    borderRadius: "4px",
    m: { xs: 0.5, md: 1 },
    cursor: "pointer",
    backgroundColor: "#FFFF",
    border:
      activeIndex === index ? "2px solid #007bff" : "2px solid transparent",
    "&:hover": {
      border: "2px solid #007bff",
    },
  }),
  caption: {
    p: 0,
  },
};

const images = [
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656",
];

const HomeD = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Box sx={styles.container}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          padding: "16px",
        }}
      >
        <Typography
          sx={{ ...styles.title, typography: { xs: "h4", md: "h3" } }}
        >
          PHOTO GALLERY
        </Typography>
      </motion.div>
      <Box
        component={Carousel}
        fade
        sx={{ mt: 3 }}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
      >
        {images.map((image, index) => (
          <Box component={Carousel.Item} key={index} interval={3000}>
            <Box component="img" src={image} sx={styles.img} />
            <Box component={Carousel.Caption} sx={styles.caption}>
              <Box sx={styles.box}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    sx={() => styles.indicators(activeIndex, index)}
                    onClick={() => handleSelect(index)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeD;
