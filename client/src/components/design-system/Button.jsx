import { cn } from "../../utils/cn"

const Button = ({ children, className, variant = "default", ...rest }) => {
    return (
        <button className={cn(
            "py-3 px-5 shadow-lg border rounded-md",
            className,
            variant === "default" && "bg-gray-200",
            variant === "primary" && "bg-blue-500",
            variant === "danger" && "bg-red-500",
            variant === "success" && "bg-green-500",
            variant === "warning" && "bg-yellow-500",
            variant === "dark" && "bg-gray-600 text-white",
        )} {...rest}>{children}</button>
    )
}

export default Button