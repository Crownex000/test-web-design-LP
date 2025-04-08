import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const styles = {
  container: {
    p: {xs: 5, md: 10},
    backgroundColor: "#161616",
  },
  grid: {
    p: 3,
  },
  title: {
    color: "#FFFF",
    fontWeight: "bold",
    m: { xs: 2, md: 4 },
  },
};

const details = [
  {
    img: "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Real Estate Done Right",
    text: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    img: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Commercial & Residential",
    text: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },
  {
    img: "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
    title: "Rely on Expertise",
    text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];
const HomeE = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const inView2 = useInView(ref, {once: true});

  return (
    <Box sx={styles.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        spacing={2}
        sx={styles.grid}
      >
        <Grid size={{ xs: 12 }} textAlign="right">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Typography
              sx={{ ...styles.title, typography: { xs: "h4", md: "h3" } }}
            >
              OUR SERVICES
            </Typography>
          </motion.div>
        </Grid>
        {details.map((detail, i, arr) => (
          <Grid
            size={{ xs: 12, md: 12 / arr.length }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 + 2 }}
            >
              <Card sx={{ maxWidth: {xs: "100%", md: 345} }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={detail.img}
                    alt={`img-${i}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {detail.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {detail.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeE;
