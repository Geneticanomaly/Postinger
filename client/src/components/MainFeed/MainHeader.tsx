import { useState } from 'react';

const MainHeader = () => {
    const [selectedElement, setSelectedElement] = useState('For you');

    return (
        <header
            className="sticky top-0 z-20 flex items-center text-center border-b border-l border-r w-full 
        border-neutral-700 bg-opacity-90 bg-neutral-950 text-sm backdrop-blur-sm"
        >
            <span
                className={`relative flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                        cursor-pointer ${selectedElement === 'For you' && 'font-bold'}`}
                onClick={() => setSelectedElement('For you')}
            >
                For you
                {selectedElement === 'For you' && (
                    <div className="absolute bottom-0 h-[4px] w-[30%] bg-blue-500 rounded-full" />
                )}
            </span>
            <span
                className={`relative flex justify-center p-4 w-full hover:bg-neutral-700 transition duration-300 
                        cursor-pointer ${selectedElement === 'Following' && 'font-bold'}`}
                onClick={() => setSelectedElement('Following')}
            >
                Following
                {selectedElement === 'Following' && (
                    <div className="absolute bottom-0 h-[4px] w-[30%] bg-blue-500 rounded-full" />
                )}
            </span>
        </header>
    );
};

export default MainHeader;
