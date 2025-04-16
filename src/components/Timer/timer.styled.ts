import { styled } from "@mui/material"

export const Timer = styled("div")(() => ({
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #cccdcf",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",

    ".timerDisplay": {
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#422680",
        fontFamily: "monospace",
        marginBottom: "1.5rem",
    },

    ".timerButton": {
        display: "Flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "30px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        gap: "5px",
    },

}))