import { useThemeContext } from '../context/themeContext';

const DarkModeToggle = () => {
    const { theme, setTheme } = useThemeContext();
    return (
        <>
            <button
                className=" w-12 h-12 bottom-12 right-12 bg-neutral-900 text-sm dark:bg-white rounded-full
                    text-white dark:text-black"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'dark' ? 'DRK' : 'LGT'}
            </button>
        </>
    );
};

export default DarkModeToggle;
