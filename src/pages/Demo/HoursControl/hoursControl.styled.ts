import { Box, styled } from "@mui/material";

export const GraficBox = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,


    ".progressCircleWrapper": {
        position: "relative",
        width: "12rem",
        height: "12rem",
        marginBottom: "1.5rem",
    },

    ".progressCircle": {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: "rgba(66, 38, 128, 0.1)",
        alignItems: "center",
        justifyContent: "center",
    },

    ".progressSvg": {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
    },

    ".progressStatus": {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
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

    ".weeklySummaryContent": {
        flexDirection: "row",
        display: "flex",
        gap: 15,
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "#422680",
    },

    ".projectionGrid": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 12,
    },

    [theme.breakpoints.up("sm")]: {
        ".projectionGrid": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
    },

    ".projectionProgressHeader": {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
    },


}))