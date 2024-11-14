// src/theme.js
import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#236c9c" : "#90caf9",
      },
      secondary: {
        main: mode === "light" ? "#5b5675" : "#f48fb1",
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#fff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#0a2d44" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });
