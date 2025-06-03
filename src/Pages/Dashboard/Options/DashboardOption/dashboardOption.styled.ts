import { Box, styled } from "@mui/material";

interface ResponsiveProps {
  open: boolean;
}

export const InfoCardsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<ResponsiveProps>(({ theme, open }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 24,

  [theme.breakpoints.down("md")]: open
    ? {
        display: "flex",
        flexDirection: "column",
      }
    : {},
}));

export const GraficWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<ResponsiveProps>(({ theme, open }) => ({
  display: "flex",
  width: "100%",
  gap: 24,
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: open
    ? {
        flexDirection: "column",
      }
    : {},
}));
