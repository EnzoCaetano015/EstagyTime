import { keyframes, styled } from "@mui/material"

const dotBounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(1.2);
    background-color: #422680;
  }
`;

export const SplashContainer = styled("div")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "300px",
    display: "flex",
    justifyContent: "center",

    ".logoIcon": {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#422680",
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px auto",
    },

    ".dotsContainer": {
        flexDirection: "row",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "24px",
    },

    ".dot": {
        width: "10px",
        height: "10px",
        backgroundColor: "#ccc",
        borderRadius: "50%",
        animation: `${dotBounce} 1.2s infinite ease-in-out`,
    },

    ".dot:nth-child(1)": {
        animationDelay: "0s",
    },
    ".dot:nth-child(2)": {
        animationDelay: "0.2s",
    },
    ".dot:nth-child(3)": {
        animationDelay: "0.4s",
    },

}))