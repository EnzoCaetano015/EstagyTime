import { Chip, type ChipProps } from "@mui/material";

interface CustomChipProps extends ChipProps {
    type?: "In Progress" | "Completed" | "Not Started";
    dificuldade?: "alta" | "média" | "baixa";
}

export default function CustomChip({ type, dificuldade, ...props }: CustomChipProps) {
    const baseStyles = {
        fontWeight: 500,
        textTransform: "none",
    };

    const typeStyles: Record<NonNullable<CustomChipProps["type"]>, object> = {
        "In Progress": {
            backgroundColor: "#DDEAFD",
            color: "#5564BF",
            fontWeight: "bold",
        },
        Completed: {
            backgroundColor: "#DEFCE7",
            color: "#548C62",
            fontWeight: "bold",
        },
        "Not Started": {
            backgroundColor: "#575D68",
            color: "#F3F4F6",
            fontWeight: "bold",
        },
    };

    const dificuldadeStyles: Record<NonNullable<CustomChipProps["dificuldade"]>, object> = {
        alta: {
            backgroundColor: "#FFCDD2",
            color: "#C62828",
            fontWeight: "bold"
        },
        média: {
            backgroundColor: "#FFE0B2",
            color: "#EF6C00",
            fontWeight: "bold"
        },
        baixa: {
            backgroundColor: "#DDEAFD",
            color: "#5564BF",
            fontWeight: "bold"
        },
    };

    const label = type ?? dificuldade ?? props.label;

    return (
        <Chip
            label={label}
            sx={{
                ...baseStyles,
                ...(type ? typeStyles[type] : {}),
                ...(dificuldade ? dificuldadeStyles[dificuldade] : {}),
            }}
            {...props}
        />
    );
}
