import { useState } from "react";
import {
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Box,
    Typography,
    SxProps, 
    Theme
} from "@mui/material";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";

interface Option {
    value: string
    label: string
}

interface CustomSelectProps{
    title: string
    label: string
    options: Option[]
    displayEmpty?: boolean
    initialValue?: string
    onChange?: (value: string) => void
    sx?: SxProps<Theme>;
}

export default function CustomSelect({ title, label, options, displayEmpty = false, initialValue = "", onChange, sx}: CustomSelectProps) {

    const [selected, setSelected] = useState<string>(initialValue);
    const labelId = `${label.replace(/\s+/g, "")}-label`;
    const selectId = `${label.replace(/\s+/g, "")}-select`;

    const handleChange = (e: SelectChangeEvent<string>) => {
        const value = e.target.value;
        setSelected(value);
        if (onChange) onChange(value);
    };

    const customStyles = useCustomSelectStyles();

    return (
        <Box>
            <Typography variant="subtitle2" sx={{ color: "#6B7280", mb: "5px" }}>
                {title}
            </Typography>
            <FormControl fullWidth>
                <Select
                    labelId={labelId}
                    id={selectId}
                    value={selected}
                    onChange={handleChange}
                    displayEmpty={displayEmpty}
                    sx={{ ...customStyles, ...sx }}
                >
                    {displayEmpty && (
                        <MenuItem value="">
                            <em>{label}</em>
                        </MenuItem>
                    )}
                    {options.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
