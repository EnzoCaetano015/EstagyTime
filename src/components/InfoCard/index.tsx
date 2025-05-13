import { Box, StackProps, Typography, } from "@mui/material";
import * as Styled from "./infoCard.styled"
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps extends StackProps {

    typeCard: "current" | "daily" | "completed"
    title: string
    info: string
    description: string
    children?: ReactNode
    icon?: LucideIcon
}


export default function InfoCard({ typeCard, title, info, description, children, icon: Icon, ...rest }: InfoCardProps) {

    const colorMap: Record<NonNullable<InfoCardProps['typeCard']>, string> = {
        current: "#eab308",
        daily: "#6B7280",
        completed: "#22c55e",
    };

    const descriptionColor = typeCard ? colorMap[typeCard] : undefined;

    return (

        <Styled.InfoCard {...rest}>

            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="body2" sx={{ color: "#6B7280", fontWeight: 600 }}>{title}</Typography>
                {Icon && <Icon size={15} style={{ marginRight: 8, color: "#6B7280" }} />}
            </Box>


            <Typography variant="h5" sx={{ fontWeight: 600, color: "#422680" }}>{info}</Typography>

            <Box>

                <Typography variant="body1" sx={{ color: descriptionColor }}>
                    {description}
                </Typography>

                <Box>
                    {children}
                </Box>

            </Box>

        </Styled.InfoCard>

    )
}