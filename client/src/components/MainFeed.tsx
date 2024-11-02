const MainFeed = () => {
    return (
        <div className="w-[600px] lg:w-[990px] ">
            <div className="flex justify-center gap-4 xl:gap-10">
                <section
                    className="flex items-center text-center border-b border-l border-r w-full 
    border-gray-500 opacity-70"
                >
                    <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                        For you
                    </h2>
                    <h2 className="p-4 bg-neutral-950 w-[50%] cursor-pointer hover:bg-neutral-500">
                        Following
                    </h2>
                </section>

                <section className="hidden lg:flex flex-col items-center">
                    <form className="">
                        <input
                            className="p-3 pl-12 rounded-full bg-neutral-800 text-neutral-100 mt-1 w-[300px]"
                            placeholder="Search"
                        />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default MainFeed;
