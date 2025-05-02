import { styles } from "./button.styled"
import { ButtonBase, SxProps } from '@mui/material';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    buttonStyle: "Purple" | "White" | "Black";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right"; 
    sx?: SxProps;
}

export default function Button({
    label,
    onClick,
    buttonStyle,
    icon,
    iconPosition = "left", 
    sx = {},
}: ButtonProps) {
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                ...sx,
                ...styles(buttonStyle),
                flexDirection: iconPosition === "left" ? "row-reverse" : "row", 
            }}
        >
            {icon}
            {label}
        </ButtonBase>
    );
}
