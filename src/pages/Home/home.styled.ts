import { styled } from "@mui/material"

export const Main = styled("section")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20%",
    backgroundColor: "#f8f8ff",
    marginBlock: "6%",

    ".Image": {
        backgroundColor: "#8c69d834",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },

    ".Icon": {
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#422680",
        borderRadius: "50%",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    }
}))

export const Features = styled("section")(() => ({
    textAlign: "center",
    padding: "3% 20%",
    backgroundColor: "#fff",

    ".Grid": {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
    }
}))

export const Information = styled("section")(({ theme }) => ({
    padding: "4% 20%",
    backgroundColor: "#f8f8ff",

    ".Title": {
        textAlign: "Center",
        fontWeight: "600",
        fontSize: "25px",
        marginBottom: "4%",
        color: "#422680",
    },

    ".StepsGrid": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(4, 1fr)",
            '& > div:nth-child(-n+3) .stepCircle:after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#422680',
                top: '50%',
                left: '100%',
                transform: 'translateY(-50%)',
            },

            '& .stepCircle.noLine::after': {
                display: 'none',
            },
        },
    },

    ".stepCircle": {
        width: "4rem",
        height: "4rem",
        borderRadius: "9999px",
        backgroundColor: "#422680",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1rem",
        position: "relative",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "18px",
    }

}))