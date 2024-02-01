import { cn } from '../../utils/cn'

const Select = ({ children, className, ...rest }) => {
    return (
        <select name="" id="" className={cn(
            'outline-none w-[220px] border-2 capitalize border-black dark:border-black text-center p-2 rounded-md shadow-md dark:text-black',
            className
        )} {...rest}>
            {children}
        </select>
    )
}

export default Select
