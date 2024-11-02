const Navbar = () => {
    return (
        <nav className="h-14 bg-neutral-950 flex justify-between items-center text-neutral-100">
            <section className="">
                <h1>Postinger</h1>
            </section>

            <form className="">
                <input
                    className="p-3 pl-12 rounded-full bg-neutral-800 text-neutral-100 w-[300px]"
                    placeholder="Search"
                />
            </form>
        </nav>
    );
};

export default Navbar;
