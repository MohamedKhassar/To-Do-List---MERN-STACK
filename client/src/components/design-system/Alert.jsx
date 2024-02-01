import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { IoMdCloseCircleOutline } from "react-icons/io";


function Alert({ children, type = "error", className, duration = 5000 }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration); // Remove the alert after 5 seconds (adjust as needed)

        return () => clearTimeout(timer);
    }, []);

    return (
        visible && (
            <div className={cn(
                "capitalize rounded-md p-4 flex gap-x-10 justify-between items-center absolute right-3 top-4",
                type === 'error' ? 'bg-red-100 text-red-900' :
                    type === 'success' ? 'bg-green-100 text-green-900' :
                        type === 'warning' ? 'bg-yellow-100 text-yellow-900' :
                            'bg-gray-100 text-gray-900',
                className
            )}>
                {children}
                <IoMdCloseCircleOutline size={20} onClick={() => setVisible(false)} />
            </div>
        )
    );
}

export default Alert;
