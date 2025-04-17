import { styled } from "@mui/material"

export const Main = styled("div")(() => ({
    p: "48px 16px",
    background: "linear-gradient(to bottom, #fff, #F8F8FF)",

    ".Divider": {
        width: "60px",
        height: "3px",
        backgroundColor: "#422680",
        borderRadius: "9999px",
        margin: "0 auto",
    }
}))

export const Features = styled("section")(({ theme }) => ({
    paddingBottom: "64px",

    ".Title": {
        fontSize: "25px",
        color: "#422680",
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "600",
    },

    ".Grid": {
        display: "grid",
        gap: "3rem",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(2, 1fr)"
        }
    }
}))

export const Benefits = styled("section")(({ theme }) => ({
    padding: "2rem 1rem",
    backgroundColor: "#fff",

    ".Container": {
        maxWidth: "55%",
        margin: "0 auto",
        textAlign: "center",
    },

    ".Title": {
        fontSize: "25px",
        color: "#422680",
        marginBottom: "30px",
        fontWeight: "600",
    },

    ".Grid": {
        display: "grid",
        gap: "3rem",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(3, 1fr)"
        }
    },

    ".Icon": {
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        backgroundColor: "#422680",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1rem",
    },

    ".benefitTitle": {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "0.75rem",
    },
    ".benefitText": {
        fontSize: "13px",
        color: "#4B5563",
    }
}))

export const Cases = styled("section")(({ theme }) => ({
    padding: "4rem 1rem",

    ".caseContainer": {
        maxWidth: "55%",
        margin: "0 auto",
        textAlign: "center",
    },

    ".caseTitle": {
        fontSize: "25px",
        color: "#422680",
        marginBottom: "30px",
        fontWeight: "600",
    },

    ".caseGrid": {
        display: "grid",
        gap: "3rem",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(2, 1fr)"
        }
    },

}))

export const Questions = styled("section")(() => ({
    padding: "4rem 1rem",
    backgroundColor: "#fff",

    ".questionContainer": {
        maxWidth: "55%",
        margin: "0 auto",
        textAlign: "center",
    },

    ".questionTitle": {
        fontSize: "25px",
        color: "#422680",
        marginBottom: "30px",
        fontWeight: "600",
    },
}))