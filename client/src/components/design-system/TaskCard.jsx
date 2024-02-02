import { FaCheck, FaTrash } from "react-icons/fa"
import { cn } from "../../utils/cn"
import { MdEdit } from "react-icons/md"
import { Link } from "react-router-dom"
const TaskCards = ({ id, title, status, priority, className, doneTask, softDelete }) => {
    return (
        <div className="hover:scale-[1.01] duration-500 flex justify-between items-end gap-x-60 dark:text-[#BB86FC] capitalize border rounded-lg p-5 shadow-md dark:shadow-[#BB86FC] text-center dark:border-[#BB86FC] border-black shadow-gray-700" >
            <div className="grid gap-y-6">
                <h1 className="text-start">Title</h1>
                <h1 className={cn("capitalize", status == "done" && "line-through decoration-solid")}>{title}</h1>
            </div>
            <div className="flex gap-x-10">
                <div className="grid gap-y-6">
                    <h1>status</h1>
                    <p className={cn("capitalize rounded-3xl py-1 px-6  text-black text-sm",
                        status == "to do" && "bg-red-600",
                        status == "doing" && "bg-yellow-600",
                        status == "done" && "bg-green-600",
                    )}>{status}</p>
                </div>
                <div className="grid gap-y-6">
                    <h1>priority</h1>
                    <p className={cn("capitalize rounded-3xl py-1 px-6  text-black text-sm",
                        priority == "not important" ? "bg-yellow-600" : "bg-red-600",
                        className
                    )}>{priority}</p>
                </div>
                <div className="grid gap-y-6">
                    <h1>actions</h1>
                    <div className={cn(
                        "grid gap-x-6",
                        status === "done" ? "grid-cols-2" : "grid-cols-3"
                    )}>
                        {status !== "done" && <div className="text-green-500 hover:scale-125 duration-500" onClick={doneTask}><FaCheck size={23} />
                        </div>}
                        <Link to={`/update-task/${id}`} ><MdEdit size={23} className="dark:text-[#BB86FC] hover:scale-125 duration-500" /></Link>
                        <FaTrash size={23} className="text-red-600 hover:scale-125 duration-500" onClick={softDelete} />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default TaskCards