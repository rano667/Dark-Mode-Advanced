// src/ThemeCard.js
import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

function ThemeCard() {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", mt: 4, backgroundColor: "background.paper" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          Themed Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card changes its appearance based on the selected theme, using Material-UI's theming capabilities.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="outlined" color="secondary">
          Action
        </Button>
      </Box>
    </Card>
  );
}

export default ThemeCard;
