import { Box, Card, Stack, styled } from "@mui/material";

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

export const HeaderStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const InfoCardsBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));
