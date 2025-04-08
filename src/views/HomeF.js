import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const styles = {
  container: {
    p: 5,
    background:
      "linear-gradient(to right,rgb(159, 177, 196),rgb(209, 197, 212))",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    m: { xs: 2, md: 5 },
    p: { xs: 2, md: 5 },
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    mb: 4,
    color: "#333",
    fontWeight: "bold",
  },
  textField: {
    mb: 2,
  },
  button: {
    mt: 3,
    backgroundColor: "#161616",
    color: "#fff",
  },
  caption: {
    mt: 2,
    fontSize: 12,
    color: "#666",
  },
  title: {
    m: { xs: 3, md: 5 },
    color: "#fff",
    textAlign: "left",
    fontWeight: "bolder",
  },
  subtitle: {
    m: 3,
  },
  map: {
    width: "100%",
    height: "400px",
    border: 0,
    borderRadius: 4,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

const HomeF = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Box sx={styles.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid size={{ xs: 12 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Typography
              sx={{ ...styles.title, typography: { xs: "h4", md: "h2" } }}
            >
              CALL OR VISIT
            </Typography>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <Box sx={styles.form}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              sx={styles.subtitle}
            >
              Send Message
            </Typography>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  sx={styles.textField}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  sx={styles.textField}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Message"
                  multiline
                  rows={4}
                  sx={styles.textField}
                />
                <Button variant="contained" fullWidth sx={styles.button}>
                  SEND
                </Button>
                <Typography variant="caption" sx={styles.caption}>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="iframe"
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.798708315799!2d-116.0096468241626!3d36.20829421586792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d8b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sPahrump%2C%20NV%2C%20USA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
                  style={styles.map}
                  allowFullScreen=""
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeF;
