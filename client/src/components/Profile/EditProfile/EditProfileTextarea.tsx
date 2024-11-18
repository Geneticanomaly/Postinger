import React, { useState } from 'react';

interface EditProfileTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    rows: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const EditProfileTextarea = ({
    label,
    rows,
    value,
    onChange,
    ...props
}: EditProfileTextareaProps) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    return (
        <div className="w-[95%] flex items-center justify-center relative">
            <textarea
                className="w-full p-2 pt-7 text-[16px] bg-neutral-950 text-white rounded-md 
                           placeholder-gray-400 outline-none resize-none border border-neutral-600
                           focus:border-blue-500"
                rows={rows}
                value={value}
                onChange={onChange}
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
        </div>
    );
};

export default EditProfileTextarea;
