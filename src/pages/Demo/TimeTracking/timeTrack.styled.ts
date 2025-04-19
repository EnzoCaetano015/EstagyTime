import { styled } from "@mui/material"
import { motion } from "framer-motion"

export const Field = styled("div")(() => ({

    ".fieldHeader": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    ".fieldLabel": {
        color: "black",
        fontSize: "16px",
        fontWeight: "600",
    },

    ".dateDisplay": {
        width: "10%",
        color: "#6B7280",
    },
}))

export const TaskBox = styled(motion.div)(() => ({

    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "5px",

    ".hoursLabel": {
        fontSize: "12px",
        color: "#6B7280",
        marginBottom: "0.25rem",
        fontWeight: "normal",
    },

    ".hoursIconBox": {
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        backgroundColor: "rgba(66, 38, 128, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    ".progressLabel": {
        fontSize: "12px",
        color: "#6B7280",
        marginBottom: "5px",
        fontWeight: "normal",
    },

    ".progressContainer": {
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center",
        width: "100%",
    },

    ".progressBar": {
        flex: 1,
        height: "6px !important",
        backgroundColor: "rgba(66, 38, 128, 0.1) !important",
    },


    ".taskSubFields": {
        marginTop: "2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
    },

}))


