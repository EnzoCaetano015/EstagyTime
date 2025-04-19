// button.styled.ts
import { ButtonProps } from "./index";

export const styles = (buttonStyle?: ButtonProps["buttonStyle"]) => ({
    backgroundColor: buttonStyle === "Purple" ? "#422680" : "#fff",
    color: buttonStyle === "Purple" ? "#fff" : "#422680",
    border: buttonStyle === "Purple" ? "none" : "2px solid #422680",
    transition: "opacity 0.3s ease",
    cursor: 'pointer',
    fontWeight: '600',
    borderRadius: '4px',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    "&:hover": {
        opacity: 0.6
    }
});

