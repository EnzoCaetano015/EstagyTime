import { Stack, styled } from "@mui/material"

export const Timer = styled(Stack)(() => ({
    backgroundColor: "transparent",
    padding: "1.5rem",
    borderRadius: "0.5rem",

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
        width: "200px",
        height: "30px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        gap: "8px",
    },

}))