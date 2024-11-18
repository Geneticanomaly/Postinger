import React, { useState } from 'react';

type EditProfileTextareaProps = {
    label: string;
    maxCount: number;
    rows: number;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

const EditProfileTextarea = ({
    label,
    maxCount,
    rows,
    value,
    onChange,
    ...props
}: EditProfileTextareaProps) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= maxCount) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="w-[95%] flex items-center justify-center relative">
            <textarea
                className="w-full p-2 pt-7 text-[16px] bg-neutral-950 text-white rounded-md 
                           placeholder-gray-400 outline-none resize-none border border-neutral-600
                           focus:border-blue-500"
                rows={rows}
                value={value}
                onChange={(e) => handleChange(e)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            ></textarea>
            <label
                className={`absolute text-[12px] top-1.5 left-2 transition duration-200 pointer-events-none
                           peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px]
                           peer-placeholder-shown:text-neutral-600 peer-focus:top-1.5 peer-focus:text-[12px]
                           peer-focus:text-[#5b9aff] ${
                               focused ? 'text-blue-500' : 'text-neutral-500'
                           }`}
            >
                {label}
            </label>
            {focused && (
                <label
                    className={`absolute text-[12px] top-1.5 right-2 transition duration-200 pointer-events-none
                           peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px]
                           peer-placeholder-shown:text-neutral-600 peer-focus:top-1.5 peer-focus:text-[12px]
                           peer-focus:text-[#5b9aff] ${
                               focused ? 'text-blue-500' : 'text-neutral-500'
                           }`}
                >
                    {value.length} / {maxCount}
                </label>
            )}
        </div>
    );
};

export default EditProfileTextarea;
