import { Box, StackProps, Typography } from "@mui/material"
import * as Styled from "./cardCompanySelection"
import { ReactNode } from "react"
import { LucideIcon } from 'lucide-react'

interface CardCompanySelectionProps extends StackProps {
    icon: LucideIcon             
    title: string
    subtitle: string
    children: ReactNode

}

export default function CardCompanySelection({ icon: Icon, title, subtitle, children, ...rest }: CardCompanySelectionProps) {
    return (
        <Styled.CardCompanySelection {...rest} sx={{ padding: "20px", gap: 2, }}>

            <Box>
                <Typography variant="h1" className="title"> <Icon size={20} color="#422680" />{title}</Typography>
                <Typography className="subtitle">{subtitle}</Typography>
            </Box>

            <Box className="content">
                {children}
            </Box>

        </Styled.CardCompanySelection>
    )
}