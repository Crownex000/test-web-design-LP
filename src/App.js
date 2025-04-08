import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import HomeA from "./views/HomeA";
import HomeB from "./views/HomeB";
import Footer from "./components/Footer";
import HomeC from "./views/HomeC";
import HomeD from "./views/HomeD";
import HomeE from './views/HomeE'
import HomeF from './views/HomeF'

const styles = {
  container: {
    p: 0,
  },
  web: {
    display: { xs: "none", md: "flex" },
  },
  mobile: {
    display: { xs: "block", md: "none" },
  },
};

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#161616",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar {...styles} />
      <HomeA />
      <HomeB {...styles} />
      <HomeC />
      <HomeD />
      <HomeE />
      <HomeF />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
