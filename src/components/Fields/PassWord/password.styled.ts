import { IconButton, styled, Typography } from "@mui/material";

export const EyeButton = styled(IconButton)(() => ({
    position: "absolute",
    top: "50%",
    right: "8px",
    transform: "translateY(-50%)",
    color: "#6b7280",
}))

export const Link = styled(Typography)(() => ({
    fontSize: 12,
    cursor: "pointer",
    color: "#422680",
    textDecoration: "none",
    marginTop: "2px",
    marginBottom: 0.5,
    "&:hover": {
        textDecoration: "underline",
    },
}))