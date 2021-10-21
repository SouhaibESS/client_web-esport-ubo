import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Sport UBO
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link style={{ textDecoration: "none" }} to="/teams">
              <Button
                style={{
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 1)",
                }}
                variant="outlined"
              >
                TEAMS
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/leagues">
              <Button
                style={{
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 1)",
                }}
                variant="outlined"
              >
                lEAGUES
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
