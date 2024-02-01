import { cn } from "../../utils/cn"

const Button = ({ children, className, variant = "default", ...rest }) => {
    return (
        <button className={cn(
            "py-3 px-5 shadow-lg rounded-md",
            variant === "default" && "bg-gray-200",
            variant === "primary" && "bg-blue-500",
            variant === "danger" && "bg-red-700",
            variant === "success" && "bg-green-700",
            variant === "warning" && "bg-yellow-500",
            variant === "dark" && "bg-slate-700 text-white",
            className,
        )} {...rest}>{children}</button>
    )
}
export default Button