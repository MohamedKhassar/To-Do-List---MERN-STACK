import { cn } from "../../utils/cn"

const Input = ({ className, ...rest }) => {
    return (
        <input className={cn(
            "p-2 border-2 rounded-md border-black outline-none",
            className
        )} {...rest} />
    )
}

export default Input
