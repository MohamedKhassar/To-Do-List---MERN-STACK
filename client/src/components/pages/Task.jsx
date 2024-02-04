import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../design-system/Button";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
const Task = () => {
    const nav = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/tasks/${id}`);
                setData(result.data);
            } catch (e) {
                console.log(e.message)
            }

        }
        getData()
    }, [id]
    )
    return (
        <>
  {data && <AnimatePresence>
                {/* update POPUP */}

                <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000099] flex items-center justify-center'  >
                    <motion.div
                        className="w-auto p-16 h-auto dark:bg-slate-800 bg-white rounded relative flex flex-col items-center justify-center gap-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: "0.5" }}
                    >
                        <h1 className='text-2xl font-bold dark:text-[#BB86FC] uppercase'>update the task</h1>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="Name" className="dark:text-[#bb86fc]">Your Name : </label>
                                <div name="Name">{data.created_by}</div> 
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="Title" className="dark:text-[#bb86fc]">Title : </label>
                                <div name="Title">{data.title}</div> 
                            </div>
                        </div>
                        <div className="grid gap-x-4 grid-cols-1 w-full">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label htmlFor="des" className="dark:text-[#bb86fc]">Description : </label>
                                <div name="des">{data.description}</div>  </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col gap-y-2 ">
                                <label htmlFor="status" className="dark:text-[#bb86fc]">Status : </label>
                                <div name="status">{data.status}</div> 
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="Priority" className="dark:text-[#bb86fc]">Priority : </label>
                                <div name="Priority">{data.priority}</div>  
                            </div>
                        </div>
                        <div className="grid gap-x-4 grid-cols-1 w-full">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label htmlFor="Deadline" className="dark:text-[#bb86fc]">Deadline : </label>
                                <div name="Deadline">{data.deadline}</div> </div>
                        </div>
                        <div className='flex gap-7'>
                            <Button variant="danger" onClick={() => nav('/tasks')}>Close</Button>
                        </div>

                    </motion.div>
                </div>


            </AnimatePresence>}
        </>
        
    )
}

export default Task
