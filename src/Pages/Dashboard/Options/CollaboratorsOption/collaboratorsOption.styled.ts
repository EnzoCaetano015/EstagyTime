import { Card, styled } from "@mui/material";

interface ResponsiveProps {
  open: boolean;
}

export const FilterWrapper = styled(Card)(({ theme }) => ({
  marginBottom: 30,

  ".HeaderCard": {
    flexDirection: "row",
  },

  "& div": {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ".exportBox": {
    flexDirection: "row",
    alignItems: "center",
  },

  [theme.breakpoints.down("md")]: {
    ".exportBox": {
      flexDirection: "column",
      alignItems: "flex-start",
    },

    ".HeaderCard": {
      flexDirection: "column",
    },

    ".SelectWrapper": {
      flexDirection: "column",
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& div": {
      flexDirection: "column",
      justifyContent: "center",
    },
    ".actions": {
      alignItems: "center",
    },
  },
}));

export const Table = styled(Card, {
  shouldForwardProp: (prop) => prop !== "open",
})<ResponsiveProps>(({ theme, open }) => ({
  overflow: "hidden",

  ...(open && {
    [theme.breakpoints.down("md")]: {
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  }),
}));
