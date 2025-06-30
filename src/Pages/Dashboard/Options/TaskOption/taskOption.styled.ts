import { Card, Stack, styled } from "@mui/material";

export const TaskMenu = styled(Card)(() => ({
  marginBottom: 24,
}));

export const TaskRWrapper = styled(Card)(({ theme }) => ({
  ".filter": {
    flexDirection: "row",
    alignItems: "end",
  },

  ".filterSelects": {
    flexDirection: "row",
    alignItems: "end",
  },

  [theme.breakpoints.down("md")]: {
    ".filter": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    ".filterSelects": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export const HeaderStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",

    ".filter": {
      flexDirection: "column",
    },
  },
}));

export const FiltersStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));
