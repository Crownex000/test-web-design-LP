import { Box, Button, colors, Grid, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";
import React from "react";
import { Parallax } from "react-parallax";
import { TypeAnimation } from "react-type-animation";

const styles = {
  container: {
    p: { xs: 10, md: 15 },
  },
  lContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: { xs: 2, md: 0 },
  },
  rContainer: {
    color: "#FFFFFF",
    textAlign: "center",
    mt: { xs: 2, md: 0 },
    "> *": {
      my: { xs: 1, md: 3 },
    },
  },
  img: {
    width: { xs: 200, md: "auto" },
    borderRadius: 50,
    borderShadow: 100,
  },
  button: {
    backgroundColor: "#161616",
  },
  title: {
    height: 50,
    my: { xs: 1, md: 4 },
  },
};

const HomeA = () => {
  return (
    <Parallax
      blur={2}
      bgImage="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:900,m"
      bgImageStyle={{ width: "100%", height: "100%" }}
      strength={200}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={styles.container}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={styles.lContainer}>
            <Box
              component="img"
              sx={styles.img}
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={styles.rContainer}>
            <Typography sx={{ typography: { xs: "h4", md: "h3" }, textDecoration: "underline" }}>
              MARCI METZGER
            </Typography>
            <Typography variant="caption">
              REALTOR FOR NEARLY 3 DECADES
            </Typography>
            <Typography
              sx={{ ...styles.title, typography: { xs: "h5", md: "h4" } }}
            >
              <TypeAnimation
                sequence={[
                  "THE RIDGE REALTY GROUP",
                  2000,
                  "PAHRUMP REALTOR",
                  2000,
                ]}
                speed={20}
                repeat={Infinity}
                cursor={false}
              />
            </Typography>
            <Button
              variant="contained"
              startIcon={<Phone />}
              sx={styles.button}
            >
              CALL NOW - 206-919-6886
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Parallax>
  );
};

export default HomeA;
