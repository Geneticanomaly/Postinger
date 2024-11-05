import Posts from './Post/Posts';

const MainFeed = () => {
    return (
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[900px]">
            <div className="flex justify-center gap-4 xl:gap-10">
                <Posts />

                <section className=" hidden mr-2 lg:flex flex-col items-center">
                    <form className="sticky top-0 z-10">
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
