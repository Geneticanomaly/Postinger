const SideContent = () => {
    return (
        <div>
            <section className=" hidden mr-2 lg:flex flex-col items-center">
                <form className="sticky top-0 z-10">
                    <input
                        className="p-3 pl-12 rounded-full bg-neutral-800 text-neutral-100 mt-1 w-[300px]"
                        placeholder="Search"
                    />
                </form>
            </section>
        </div>
    );
};

export default SideContent;
