import { styles } from "./button.styled"
import { ButtonBase, SxProps } from '@mui/material';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    buttonStyle?: "Purple" | "White";
    icon?: React.ReactNode
    sx?: SxProps;
}

export default function Button({ label, onClick, buttonStyle, icon, sx = {} }: ButtonProps) {

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                ...sx,
                ...styles(buttonStyle)
            }}>
            {label}{icon}
        </ButtonBase>
    )
}