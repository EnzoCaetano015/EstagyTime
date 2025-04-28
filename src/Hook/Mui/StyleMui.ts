export const useCustomSelectStyles = () => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#422680',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#422680',
    },

    '& .MuiTabs-indicator': {
        backgroundColor: '#422680',
    },
    '& .MuiTab-root.Mui-selected': {
        color: '#422680',
    },
    '& .MuiRadio-root': {
        '&.Mui-checked': {
            color: '#422680',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(0, 128, 0, 0.1)',
        },
    },
    '&.Mui-checked': {
        color: '#422680',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#422680',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#422680',
    },
})