import { ButtonProps } from "./index";

export const styles = (buttonStyle?: ButtonProps["buttonStyle"]) => ({

   backgroundColor:
        buttonStyle === "Purple" ? "#422680" :
        buttonStyle === "Black" ? "#fff" :
        "#fff",

    color:
        buttonStyle === "Purple" ? "#fff" :
        buttonStyle === "Black" ? "#000" :
        "#422680",

    border:
        buttonStyle === "Purple" ? "none" :
        buttonStyle === "Black" ? "1px solid rgba(107, 114, 128, 0.47)" :
        "2px solid #422680",
    
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
    },

});

