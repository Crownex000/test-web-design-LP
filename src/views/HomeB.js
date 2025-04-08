import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const styles = {
  container: {
    p: { xs: 2, md: 10 },
    backgroundColor: "#161616",
    color: "#FFFF",
  },
  box: {
    display: "grid",
  },
  title: {
    mb: { xs: 2, md: 5 },
  },
  img: {
    width: "100%",
    md: 4,
  },
  grid: {
    objectFit: "contain",
  },
  boxContainer: {
    p: { xs: 2, md: 10 },
    textAlign: "center",
  },
  text: {
    mb: { xs: 5, md: 0 },
  },
};

const data = [
  {
    title: "Top Residential Sales Last 5 Years",
    text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    img: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true",
  },
  {
    title: "Don't Just List it...",
    text: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    img: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
  },
  {
    title: "Guide to Buyers",
    text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    img: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m",
  },
];

const HomeB = (props) => {
  const { web, mobile } = props;
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const inView = useInView(ref);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4= useInView(ref4);

  return (
    <Box sx={styles.container}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Typography
          sx={{ ...styles.title, typography: { xs: "h4", md: "h2" } }}
        >
          GET IT SOLD
        </Typography>
      </motion.div>
      <Box sx={web}>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={styles.grid}
        >
          <Grid size={6}>
            <Box component="img" src={data[0].img} sx={styles.img} ref={ref2} />
          </Grid>
          <Grid size={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 }: {}}
              transition={{ duration: 1.5 }}
            >
              <Typography variant="h4" sx={styles.title}>
                {data[0].title}
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {data[0].text}
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView3 ? { opacity: 1, x: 0 }: {}}
              transition={{ duration: 1.5 }}
            >
              <Typography variant="h4" sx={styles.title}>
                {data[1].title}
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {data[1].text}
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={6}>
            <Box component="img" src={data[1].img} sx={styles.img} ref={ref3} />
          </Grid>
          <Grid size={6}>
            <Box component="img" src={data[2].img} sx={styles.img} ref={ref4} />
          </Grid>
          <Grid size={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView4 ? { opacity: 1, x: 0 }: {}}
              transition={{ duration: 1.5 }}
            >
              <Typography variant="h4" sx={styles.title}>
                {data[2].title}
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {data[2].text}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ...mobile, ...styles.boxContainer }}>
        {data.map((item, i) => (
          <Box key={`${item.text}-${i}`}>
            <Box component="img" src={item.img} sx={styles.img} />
            <Typography variant="h4" sx={styles.title}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={styles.text}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeB;
