import { styled, Card } from "@mui/material"

export const Demo = styled("section")(({ theme }) => ({
    display: "flex",
    maxWidth: "100%",
    padding: "2.5rem 1rem",
    background: "#F8F8FF",
    justifyContent: "center",

    ".Title": {
        fontSize: "30px",
        fontWeight: "600",
        textAlign: "center",
        color: "#422680",
        marginBottom: "1rem",
    },

    ".Subtitle": {
        fontSize: "16px",
        color: "#4B5563",
        textAlign: "center",
        maxWidth: "70%",
        margin: "0 auto",
    },

    ".Divider": {
        width: "60px",
        height: "3px",
        backgroundColor: "#422680",
        borderRadius: "9999px",
        margin: "15px auto",
    },

    [theme.breakpoints.down('md')]: {
        ".Title": {
            fontSize: "25px",
        },
        ".Subtitle": {
            fontSize: "13px",
        }
    }
}))

export const Content = styled("section")(({ theme }) => ({
    maxWidth: "55%",
    margin: "0 auto",

    [theme.breakpoints.down('md')]: {
        maxWidth: "80%",

    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: "90%",
        '& button': {
            fontSize: "10px",
        }
    },
}))

export const DemoCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "1px solid rgba(66, 38, 128, 0.2)",
    marginBottom: "8px",

    ".cardHeader": {
        padding: " 20px 1.5rem 0px",
        lineHeight: "3px",
    },

    ".cardTitle": {
        fontSize: "25px",
        color: "#422680",
        fontWeight: "600",
    },

    ".cardDescription": {
        fontSize: "13px",
        color: " #6B7280",
    },

    ".cardContent": {
        display: "flex",
        flexDirection: "column",
    },

    [theme.breakpoints.down('md')]: {
        ".cardTitle": {
            fontSize: "20px",
        },

        ".cardDescription": {
            fontSize: "12px",
        },
    }

}))
