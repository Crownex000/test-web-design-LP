import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import { motion, useInView } from "motion/react";

const styles = {
  container: {
    m: 3,
    p: { xs: 1, md: 10 },
  },
  form: {
    p: 5,
    backgroundColor: "#FFFF",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 50px",
  },
  title: {
    color: "#FFFF",
    textAlign: "right",
    fontWeight: "bold",
    mb: 4,
  },
  subtitle: {
    mb: 3,
  },
  button: {
    my: 3,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#161616",
  },
  imgs: {
    textAlign: "center",
    mb: 3,
  },
  img: {
    m: { xs: 3, md: 5 },
    "&:hover": {
      transform: "scale(1.3)",
      transition: "transform 0.3s ease-in-out",
    },
  },
};

const images = [
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg:true",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg:true",
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",
];

const HomeC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Parallax
      blur={3}
      bgImage="https://img1.wsimg.com/isteam/stock/143/:/rs=w:1023,m"
      strength={200}
    >
      <Box sx={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <Typography
            sx={{ ...styles.title, typography: { xs: "h4", md: "h2" } }}
          >
            Find Your Dream Home
          </Typography>
        </motion.div>
        <Box sx={styles.form}>
          <Box sx={styles.imgs}>
            {images.map((img) => (
              <Box component="img" src={img} sx={styles.img} />
            ))}
          </Box>
          <Typography variant="h5" sx={styles.subtitle}>
            Search Listings
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Location" />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => <TextField {...params} label="Type" />}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Sort By" />
                )}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Sort By" />
                )}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Autocomplete
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Sort By" />
                )}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <TextField label="Min Price" variant="standard" />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <TextField label="Max Price" variant="standard" />
            </Grid>
            <Grid size={12}>
              <Button variant="contained" fullWidth sx={styles.button}>
                Search Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Parallax>
  );
};

export default HomeC;
