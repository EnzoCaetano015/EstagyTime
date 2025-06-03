import { styles } from "./button.styled"
import { ButtonBase, ButtonBaseProps, SxProps } from '@mui/material';

export interface ButtonProps extends ButtonBaseProps {
    label: string;
    onClick: () => void;
    buttonStyle: "Purple" | "White" | "Black" | "FullBlack";
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
    ...props
}: ButtonProps) {
    return (
        <ButtonBase
            {...props}
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
