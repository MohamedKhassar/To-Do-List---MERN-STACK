import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { IoAdd } from "react-icons/io5";
import axios from 'axios'
import Button from '../design-system/Button';
import Select from '../design-system/Select';
import Input from '../design-system/Input';
import useFetch from '../../hooks/useFetch';
const UpdateTask = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [url, setUrl] = useState();
    const [method, setMethod] = useState("GET");
    const [task] = useFetch(`http://localhost:8080/api/tasks/${id}`)
    const [data, setData] = useState(task);





    const UpdateData = async () => {
        try {
            const result = await axios.put(`http://localhost:8080/api/tasks/${id}`, data).then(
                nav("/tasks")

            );
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>

            {task && <AnimatePresence>
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
                                <Input type="text" placeholder='Enter Your Name' id="Name" value={data.created_by} onChange={(e) => {
                                    setData({
                                        ...data,
                                        created_by: e.target.value
                                    })
                                }} />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="Title" className="dark:text-[#bb86fc]">Title : </label>
                                <Input type="text" placeholder='Task' id="Title" value={data.title} onChange={(e) => {
                                    setData({
                                        ...data,
                                        title: e.target.value
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="grid gap-x-4 grid-cols-1 w-full">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label htmlFor="des" className="dark:text-[#bb86fc]">Description : </label>
                                <textarea type="date" className="p-1 border-black border-2 rounded-md max-h-20 outline-none" placeholder="" id="des" value={data.description}></textarea>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col gap-y-2 ">
                                <label htmlFor="status" className="dark:text-[#bb86fc]">Status : </label>
                                <Select id="status"
                                    onChange={(e) => setData({ ...data, status: e.target.value })}>
                                    <option value="to do">to do</option>
                                    <option value="doing">doing</option>
                                    <option value="done">done</option>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="Priority" className="dark:text-[#bb86fc]">Priority : </label>
                                <Select id="Priority" onChange={(e) => {
                                    setData({
                                        ...data,
                                        priority: e.target.value
                                    })
                                }}>
                                    <option value="not important">not important</option>
                                    <option value="important">important</option>
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
                            <Button variant="success" onClick={UpdateData}>Save</Button>
                            <Button variant="danger" onClick={() => nav('/tasks')}>Close</Button>
                        </div>

                    </motion.div>
                </div>


            </AnimatePresence>}
        </>
    )

}
export default UpdateTask;