import googleLogo from '../../assets/icons8-google-48.png';
import discordLogo from '../../assets/icons8-discord-48.png';

const ThirdPartyAuth = () => {
    return (
        <>
            <button
                className="w-full flex justify-center items-center gap-2 p-2 rounded-full bg-neutral-white border
                        border-gray-300 cursor-pointertext-neutral-900 font-semibold hover:bg-gray-100
                        dark:bg-white dark:hover:bg-gray-200"
            >
                <img src={googleLogo} alt="Google" className="inline mr-2 w-8" />
                Sign in with Google
            </button>
            <button
                className="w-full flex justify-center items-center gap-2 p-2 rounded-full bg-neutral-white border
                        border-gray-300 cursor-pointertext-neutral-900 font-semibold hover:bg-gray-100
                        dark:bg-white dark:hover:bg-gray-200"
            >
                <img src={discordLogo} alt="Google" className="inline mr-2 w-8" />
                Sign in with Discord
            </button>
        </>
    );
};

export default ThirdPartyAuth;
