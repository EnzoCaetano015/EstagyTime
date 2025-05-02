import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Typography
} from "@mui/material";
import { LucideIcon } from "lucide-react";

interface OptionItem {
  label: string;
  onClick: () => void;
  isDanger?: boolean; 
}

interface CustomIconButtonProps {
  icon: LucideIcon;
  options: OptionItem[];
}

export default function CustomIconButton({ icon: Icon, options }: CustomIconButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (action: () => void) => {
    action();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Icon size={18} color="#000" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionClick(option.onClick)}>
            <ListItemText
              primary={
                <Typography color={option.isDanger ? "error" : "inherit"} fontWeight={option.isDanger ? "bold" : "normal"}>
                  {option.label}
                </Typography>
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
