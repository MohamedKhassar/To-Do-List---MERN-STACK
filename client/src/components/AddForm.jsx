import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./design-system/Button";
import Input from "./design-system/Input";
import Select from "./design-system/Select";
import { IoAdd } from "react-icons/io5";
const AddForm = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    const divRef = useRef(null)

    const handelClick = (e) => {
        if (divRef.current && !divRef.current.contains(e.target)) {
            setIsDisplay(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handelClick)

        return () => document.removeEventListener("mousedown", handelClick)
        // handleClick()
    }, [isDisplay])
    return (
        <>
            <div className="flex justify-center items-center">
                <div onClick={() => setIsDisplay(true)} className="flex justify-center mt-28 bg-[#BB86FC] w-fit rounded-full p-1 cursor-pointer">
                    <IoAdd size={40} className="dark:text-white" />
                </div>
            </div>
            <AnimatePresence>
                {/* update POPUP */}
                {isDisplay &&
                    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000099] flex items-center justify-center'  >
                        <motion.div ref={divRef}
                            className="w-auto p-16 h-auto dark:bg-slate-800 bg-white rounded relative flex flex-col items-center justify-center gap-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: "0.5" }}
                        >
                            <h1 className='text-2xl font-bold dark:text-[#BB86FC] uppercase'>add new task</h1>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="Name" className="dark:text-[#bb86fc]">Your Name : </label>
                                    <Input type="text" placeholder='Enter Your Name' id="Name" />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="Title" className="dark:text-[#bb86fc]">Title : </label>
                                    <Input type="text" placeholder='Task' id="Title" />
                                </div>
                            </div>
                            <div className="grid gap-x-4 grid-cols-1 w-full">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <label htmlFor="des" className="dark:text-[#bb86fc]">Description : </label>
                                    <textarea type="date" className="p-1 border-black border-2 rounded-md max-h-20 outline-none" placeholder="" id="des" ></textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="flex flex-col gap-y-2 ">
                                    <label htmlFor="status" className="dark:text-[#bb86fc]">Status : </label>
                                    <Select id="status">
                                        <option value="to do">to do</option>
                                        <option value="doing">doing</option>
                                        <option value="done">done</option>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="Priority" className="dark:text-[#bb86fc]">Priority : </label>
                                    <Select id="Priority">
                                        <option value="hight">hight</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid gap-x-4 grid-cols-1 w-full">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <label htmlFor="Deadline" className="dark:text-[#bb86fc]">Deadline : </label>
                                    <Input type="date" className="dark:text-black" id="Deadline" />
                                </div>
                            </div>
                            <div className='flex gap-7'>
                                <Button variant="success">Save</Button>
                                <Button variant="danger" onClick={() => setIsDisplay(false)}>Close</Button>
                            </div>

                        </motion.div>
                    </div>

                }
            </AnimatePresence>
        </>
    )
}

export default AddForm