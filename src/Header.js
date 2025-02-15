import React from "react";
import { Avatar, Typography, IconButton, Box } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Header = ({ src, name, signOut }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5">Task Management App</Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar
          src={src}
          alt="User Profile"
          sx={{ width: 40, height: 40, border: "2px solid #1976d2" }}
        />
        <Typography variant="h6">{name}</Typography>
        <IconButton onClick={signOut} color="primary">
          <ExitToAppIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Header;
