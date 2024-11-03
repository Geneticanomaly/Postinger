const MainHeader = () => {
    return (
        <header
            className="sticky top-0 z-10 flex items-center text-center border-b border-l border-r w-full 
border-gray-500 opacity-70"
        >
            <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                For you
            </h2>
            <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                Following
            </h2>
        </header>
    );
};

export default MainHeader;
