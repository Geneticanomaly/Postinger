import useWindowWidth from '../../hooks/useWindowWidth';
import Posts from './Posts';

const MainFeed = () => {
    const width = useWindowWidth();
    return (
        <div
            className={`${
                width <= 500 && 'w-full'
            }w-[400px] sm:w-[500px] md:w-[600px] lg:w-[990px]`}
        >
            <div className="flex justify-center gap-4 xl:gap-10">
                <Posts />

                <section className=" hidden lg:flex flex-col items-center">
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
