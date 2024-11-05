const MainHeader = () => {
    return (
        <header
            className="sticky top-0 z-10 flex items-center text-center border-b border-l border-r w-full 
        border-neutral-700 opacity-90"
        >
            <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500 transition duration-200">
                For you
            </h2>
            <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500 transition duration-200">
                Following
            </h2>
        </header>
    );
};

export default MainHeader;
