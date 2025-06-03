import { Box, Card, styled } from "@mui/material";

interface ResponsiveProps {
  open: boolean;
}

export const ProjectWrapper = styled(Card)(() => ({}));

export const UserProjectsWrapper = styled(Card)(() => ({}));

export const ProjectsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<ResponsiveProps>(({ theme, open }) => ({
  display: "grid",
  gridTemplateColumns: open ? "repeat(2, 1fr)" : "repeat(3, 1fr)",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));
