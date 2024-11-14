// src/App.js
import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button, Typography, Container, Box } from "@mui/material";
import { getAppTheme } from "./theme";
import ThemeCard from "./ThemeCard";  // Import ThemeCard here

function App() {
  const [mode, setMode] = useState("light");

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = getAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            MUI Theme Demo
          </Typography>
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle to {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Box>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body1" color="text.primary">
            This is a simple demonstration of Material UI theme switching.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Secondary Action
          </Button>
        </Box>

        <ThemeCard />  {/* Add ThemeCard component here */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
