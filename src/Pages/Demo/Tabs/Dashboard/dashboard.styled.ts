import { CardContent, styled } from "@mui/material";

export const Dashboard = styled(CardContent)(({ theme }) => ({

    ".metricsGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        paddingBottom: 30

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

    [theme.breakpoints.down("sm")]: {

        ".metricsGrid": {
            gridTemplateColumns: "1fr",
        },

        ".taskBreakdownBox": {
            alignItems: "center",
            flexDirection: "column",
            paddingInline: "5%"
        },

        '& h2':{
            fontSize: "13px",
        }

    },


}))