import { styled, Box } from "@mui/material";

export const InfoCardsWrapper = styled(Box)(() => ({

    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
}))

export const GraficWrapper = styled(Box)(() => ({
    display: "flex",
    width: "100%",
    gap: 24,
    justifyContent: "space-between",
    
   
}))
