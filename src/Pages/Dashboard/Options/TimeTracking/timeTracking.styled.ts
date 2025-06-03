import { Card, styled } from "@mui/material";

interface ResponsiveProps {
  open: boolean;
}

export const TimeTrackerWrapper = styled(Card, {
  shouldForwardProp: (prop) => prop !== "open",
})<ResponsiveProps>(({ theme, open }) => ({
  ".timerWrapper": {
    flexDirection: "row",

    ".timerBox": {
      width: "45%",
      bgcolor: "#F9FAFB",
      borderRadius: 2,
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      ".timerBox": {
        width: "100%",
      },
    },

    ...(open && {
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        ".timerBox": {
          width: "100%",
        },
      },
    }),
  },
}));

export const TimeLogsWrapper = styled(Card)(() => ({}));

export const MonthSummaryWrapper = styled(Card)(() => ({}));
