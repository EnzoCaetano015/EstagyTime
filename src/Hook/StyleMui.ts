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
    // Override the text color for selected tabs
    '& .MuiTab-root.Mui-selected': {
        color: '#422680',
    },
    '& .MuiRadio-root': {
        '&.Mui-checked': {
            color: '#422680', // color for selected radios
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(0, 128, 0, 0.1)', // optional focus background effect
        },
    },
})