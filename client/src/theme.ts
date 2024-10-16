import { Theme } from './context/themeContext';

export const getTextFieldStyle = (theme: Theme) => {
    const style = {
        width: '70%',
        '& .MuiInputBase-input': {
            color: theme === 'light' ? '#262626' : 'white',
            '&:-webkit-autofill': {
                // Autofill colors
                WebkitBoxShadow:
                    theme === 'light'
                        ? '0 0 0 30px #ffffff inset !important'
                        : '0 0 0 30px #0a0a0a inset !important',
                WebkitTextFillColor:
                    theme === 'light' ? '#262626 !important' : '#ffffff !important',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'gray',
            // Label color when focused
            '&.Mui-focused': {
                color: '#60a5fa',
            },
        },
        '& .MuiOutlinedInput-root': {
            // Border color
            '& fieldset': {
                borderColor: '#404040',
            },
            // Border color on hover
            '&:hover fieldset': {
                borderColor: '#60a5fa',
            },
            // Border color when focused
            '&.Mui-focused fieldset': {
                borderColor: '#60a5fa',
            },
        },
    };
    return style;
};
