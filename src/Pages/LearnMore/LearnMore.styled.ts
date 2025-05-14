import { styled } from "@mui/material"

export const Main = styled("div")(({ theme }) => ({

    padding: "3% 20%",
    background: "linear-gradient(to bottom, #fff, #F8F8FF)",

    ".Divider": {
        width: "60px",
        height: "3px",
        backgroundColor: "#422680",
        borderRadius: "9999px",
        margin: "0 auto",
    },

    [theme.breakpoints.down("md")]: {

        padding: "3% 15%",

        '& h2': {
            fontSize: "25px",
        },

        '& P': {
            fontSize: "13px",
        }

    }
}))

export const Features = styled("section")(({ theme }) => ({
    padding: "3% 20%",

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
    },

    [theme.breakpoints.down("md")]: {
        padding: "3% 10%",

        ".Title": {
            fontSize: "20px",
        },

        '& h5': {
            fontSize: "16px",
        }
    }

}))

export const Benefits = styled("section")(({ theme }) => ({
    padding: "3% 20%",
    backgroundColor: "#fff",

    ".Container": {
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
    },

    [theme.breakpoints.down("md")]: {
        padding: "3% 10%",

        ".Title": {
            fontSize: "20px",
        },

        '.benefitTitle': {
            fontSize: "16px",
        },

        '.benefitText': {
            fontSize: "11px",
        }
    }

}))

export const Cases = styled("section")(({ theme }) => ({
    padding: "3% 20%",

    ".caseContainer": {
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

    [theme.breakpoints.down("md")]: {
        padding: "3% 10%",

        ".caseTitle": {
            fontSize: "20px",
        },

        ".caseContainer": {
            maxWidth: "100%",
        }
    }

}))

export const Questions = styled("section")(({theme}) => ({
    padding: "3% 20%",
    backgroundColor: "#fff",

    ".questionContainer": {
        textAlign: "center",
    },

    ".questionTitle": {
        fontSize: "25px",
        color: "#422680",
        marginBottom: "30px",
        fontWeight: "600",
    },

    [theme.breakpoints.down("md")]: {
        padding: "3% 10%",

        ".questionTitle": {
            fontSize: "20px",
        },
    }
}))