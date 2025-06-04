import { Card, Stack, styled } from "@mui/material";

export const TaskMenu = styled(Card)(() => ({
  marginBottom: 24,
}));

export const TaskRWrapper = styled(Card)(() => ({}));

export const HeaderStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FiltersStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));
