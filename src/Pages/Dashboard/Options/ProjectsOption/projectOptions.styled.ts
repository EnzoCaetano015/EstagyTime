import { Box, Card, Stack, styled } from "@mui/material";

export const ProjectWrapper = styled(Card)(() => ({}));

export const UserProjectsWrapper = styled(Card)(() => ({}));

export const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
 gap: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
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
