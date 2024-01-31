import { useEffect, useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.querySelector("html").classList.toggle("bg-slate-800", isDarkMode);
        document.querySelector("html").classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    return (
        <div onClick={toggleTheme} className='absolute right-6 top-5 hover:scale-125 duration-500 cursor-pointer'>
            {!isDarkMode ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} color='#BB86FC'
            />}
        </div>
    )
}

export default ToggleDarkMode
