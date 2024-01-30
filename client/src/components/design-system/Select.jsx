import { cn } from '../../utils/cn'

const Select = ({ children, className, variant = "default", ...rest }) => {
    return (
        <select name="" id="" className={cn(
            'outline-none border w-1/2 text-center p-1 rounded-md shadow-md ',
            variant == "default" && "border-gray-300",
            variant == "dark" && "border-slate-600 bg-slate-800 text-white shadow-black"
        )}>
            {children}
        </select>
    )
}

export default Select
