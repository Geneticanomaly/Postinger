import { IoSearchOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const SideContent = () => {
    const [searchInput, setSearchInput] = useState('');
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    };

    return (
        <div className="w-0 lg:w-[500px] flex flex-col gap-2">
            <section className=" hidden lg:flex flex-col items-center">
                <form className="sticky top-0 z-10">
                    <div className="relative flex items-center">
                        <span className="absolute ml-4 mt-1">
                            <IoSearchOutline
                                className={`text-xl ${
                                    focused ? 'text-blue-500' : 'text-neutral-400'
                                }`}
                            />
                        </span>
                        {searchInput && (
                            <span
                                className="absolute right-3 mt-1 p-1 text-lg text-neutral-900 bg-blue-500 
                                rounded-full cursor-pointer hover:bg-[#3a77da] transition duration-200"
                                onClick={() => setSearchInput('')}
                            >
                                <IoMdClose />
                            </span>
                        )}
                        <input
                            className="py-2.5 px-3 pl-12 rounded-full bg-neutral-800 text-neutral-100 mt-1 w-[300px]
                            focus:bg-neutral-950 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => handleChange(e)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SideContent;
