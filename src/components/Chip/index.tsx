import { Chip, ChipProps } from "@mui/material";

interface CustomChipProps extends ChipProps {
    type: "In Progress" | "Completed" | "Not Started"
}

export default function CustomChip({ type, ...props }: CustomChipProps) {

    const baseStyles = {
        fontWeight: 500,
        textTransform: "none",
    };
    const typeStyles: Record<CustomChipProps["type"], object> = {
        "In Progress": {
            backgroundColor: "#DDEAFD",
            color: "#5564BF",
            fontWeight: "bold"
        },
        Completed: {
            backgroundColor: "#DEFCE7",
            color: "#548C62",
            fontWeight: "bold"
        },
        "Not Started": {
            backgroundColor: "#575D68",
            color: "#F3F4F6",
            fontWeight: "bold"
        },
    };

    return (
        <Chip
            label={type}
            sx={{
                ...baseStyles,
                ...typeStyles[type],
            }}
            {...props}
        />
    )
}