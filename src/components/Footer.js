import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { ExpandMore, WhatsApp } from "@mui/icons-material";

const styles = {
  container: {
    color: "#FFFF",
    backgroundColor: "#161616",
    p: 10,
  },
  icons: {
    mx: 2,
    color: "#FFFF",
  },
  button: {
    height: 55,
    borderRadius: 50,
    backgroundColor: "#4ecb5c",
  },
  title: {
    mb: { xs: 2, md: 3 },
  },
  accordion: {
    backgroundColor: "transparent",
    color: "#FFFF",
    border: "1px solid #FFFF",
  },
  grid: {
    width: { xs: 300, md: 350 },
  },
};

const officeHours = [
  "Mon: 08:00 a.m. – 07:00 p.m.",
  "Tue: 08:00 a.m. – 07:00 p.m.",
  "Wed: 08:00 a.m. – 07:00 p.m.",
  "Thu: 08:00 a.m. – 07:00 p.m.",
  "Fri: 08:00 a.m. – 07:00 p.m.",
  "Sat: 08:00 a.m. – 07:00 p.m.",
  "Sun: 08:00 a.m. – 07:00 p.m.",
];

function Footer() {
  return (
    <Box sx={styles.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        spacing={2}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={1}
            sx={styles.grid}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={styles.title}>
                Marci Metzger - THE RIDGE REALTY GROUP
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="caption" fontSize={10}>
                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
              </Typography>
              <br />
              <Typography variant="caption" fontSize={10}>
                (206) 919-6886GROUP
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={1}
            sx={styles.grid}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6">Office Hours</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Accordion sx={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "#FFF" }} />}
                >
                  <Typography variant="body1">Office Hours</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {officeHours.map((hour) => (
                    <Typography variant="body2">{hour}</Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="caption">
                Open daily 8:00 am - 7:00 pm
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={styles.grid}>
          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              fullWidth
              sx={styles.button}
              startIcon={<WhatsApp />}
            >
              Message us on WhatsApp
            </Button>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="caption" fontSize={10}>
              Appointments outside office hours available upon request. Just
              call!
            </Typography>
          </Grid>
        </Grid>

        <Grid size={12}>
          <hr />
        </Grid>
        <Grid size={12} textAlign="center">
          {[faFacebook, faInstagram, faLinkedin, faYelp].map((icon) => (
            <IconButton
              component={FontAwesomeIcon}
              icon={icon}
              sx={styles.icons}
              fontSize={20}
            />
          ))}
        </Grid>
        <Grid size={12}>
          <Typography variant="caption">
            Copyright © 2023 Marci METZGER Homes - All Rights Reserved
          </Typography>
        </Grid>
        <Grid size={12}>
          <hr />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
