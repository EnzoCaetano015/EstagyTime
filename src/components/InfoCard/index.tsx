import { Box, StackProps, Typography, } from "@mui/material";
import * as Styled from "./infoCard.styled"

interface InfoCardProps extends StackProps {
    typeCard?: "current" | "daily" | "completed"
    title?: string
    info?: string
    description?: string
}


export default function InfoCard({ typeCard, title, info, description, }: InfoCardProps) {

    const colorMap: Record<NonNullable<InfoCardProps['typeCard']>, string> = {
        current: "#eab308",
        daily: "#6B7280",
        completed: "#22c55e",
    };

    const descriptionColor = typeCard ? colorMap[typeCard] : undefined;

    return (

        <Styled.InfoCard>

            <Typography variant="body2" sx={{ color: "#6B7280", fontWeight: 600 }}>{title}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#422680" }}>{info}</Typography>

            <Box>

                <Typography variant="body1" sx={{ color: descriptionColor }}>
                    {description}
                </Typography>

            </Box>

        </Styled.InfoCard>

    )
}