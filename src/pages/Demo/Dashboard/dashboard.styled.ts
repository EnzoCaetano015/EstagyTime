import { CardContent, styled } from "@mui/material";

export const Dashboard = styled(CardContent)(({ theme }) => ({

    ".metricsGrid": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        paddingBottom: 30

    },

    [theme.breakpoints.up("sm")]: {

        ".metricsGrid": {
            gridTemplateColumns: "repeat(4, 1fr)",
        }
    },

    ".taskBreakdownBox": {
        display: "flex",
        flexDirection: "row",
        gap: 30,
        marginTop: 30,
    },

    ".weeklySummary": {
        flexDirection: "row",
        marginTop: "1.5rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

}))