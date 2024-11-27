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
    };

    return (
        <div className=" hidden lg:flex flex-col items-center">
            <form className="sticky top-0.5 z-20">
                <div className="flex items-center">
                    <span className="absolute ml-4 mt-1">
                        <IoSearchOutline
                            className={`text-xl ${focused ? 'text-[#1D9BF0]' : 'text-neutral-400'}`}
                        />
                    </span>
                    {focused && (
                        <span
                            className="absolute right-3 mt-1 p-0.5 text-lg text-neutral-900 bg-[#1D9BF0] 
                                rounded-full cursor-pointer hover:bg-[#00aeffd8] transition duration-200"
                            onClick={() => setSearchInput('')}
                        >
                            <IoMdClose />
                        </span>
                    )}
                    <input
                        className="py-2.5 px-3 pl-12 pr-12 rounded-full bg-neutral-800 text-neutral-100 mt-1 w-[300px]
                            focus:bg-neutral-950 focus:outline-none focus:ring-1 focus:ring-[#1D9BF0]"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => handleChange(e)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
        </div>
    );
};

export default SideContent;
