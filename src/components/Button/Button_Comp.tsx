import "./btn.css"

type ButtonStyle = 1 | 2;

interface ButtonProps {
    label: string;             // Text shown on the button
    onClick: () => void;       // Action of the button
    height?: string;           // Height of the button
    width?: string;            // Width of the button
    styleVariant?: ButtonStyle; // 1 = purple background, 2 = white background
    icon?: React.ReactNode      // Optional icon prop, can be null or any valid React node
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    height = '40px',
    width = '120px',
    styleVariant = 1,
    icon = null,
}) => {
    const styles = {
        backgroundColor: styleVariant === 1 ? '#422680' : '#fff',
        color: styleVariant === 1 ? '#fff' : '#422680',
        border: styleVariant === 1 ? 'none' : '2px solid #422680',
        height,
        width,
        cursor: 'pointer',
        fontWeight: '600',
        borderRadius: '4px',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'

    } as React.CSSProperties;

    return (
        <button style={styles} className="btn" onClick={onClick}>
            {label}{icon}
        </button>
    );
};

export default Button;
