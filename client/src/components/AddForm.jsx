import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./design-system/Button";
import Input from "./design-system/Input";
import Select from "./design-system/Select";
import { IoAdd } from "react-icons/io5";
import axios from 'axios';
import Alert from "./design-system/Alert";
import useFetch from "../hooks/useFetch";
const AddForm = () => {
    const [url, setUrl] = useState();
    const [method, setMethod] = useState("GET");
    const [newData, setNewData] = useState();
    useFetch(url, method, newData)
    const [data, setData] = useState({
        created_by: "",
        title: "",
        description: "",
        status: "to do",
        priority: "not important",
        deadline: ""
    })
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState({
        created_by: "",
        title: "",
        description: "",
        status: "",
        priority: "",
        deadline: new Date().toISOString().split('T')[0]
    })
    const [isDisplay, setIsDisplay] = useState(false)
    const divRef = useRef(null)

    const handelClick = (e) => {
        if (divRef.current && !divRef.current.contains(e.target)) {
            setIsDisplay(false)
            setError(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handelClick)

        return () => document.removeEventListener("mousedown", handelClick)
        // handleClick()
    }, [isDisplay])
    const addTask = async () => {
        try {
            //console.log('Data to be sent:', data);
            setUrl("http://localhost:8080/api/tasks")
            setMethod("POST")
            setNewData(data)
            setData({
                created_by: "",
                title: "",
                description: "",
                status: "to do",
                priority: "not important",
                deadline: ""
            })
            setError(false)
            setIsDisplay(false)

        } catch (e) {
            setError(true);
            setAlert(e.response.data);
            console.log('error:', e.response.data)
        }
    }
    /* const issuccess =()=>{
          addTask();
          let alertComponent = null;
  
          if (!error) {
              alertComponent = <Alert type="success">Task added successfully</Alert>;
          } else {
              alertComponent = <Alert type="error">Task is not added successfully</Alert>;
          }
      
          return alertComponent;
      }*/
    const closeForm = () => {
        setIsDisplay(false)
        setError(false)
    }
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
                            <div className="grid grid-cols-2 gap-x-4 ">
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="Name" className="dark:text-[#bb86fc]">Your Name : </label>
                                    <Input value={data.created_by} type="text" placeholder='Enter Your Name' id="Name" onChange={(e) => {
                                        setData({
                                            ...data,
                                            created_by: e.target.value
                                        })
                                    }} />
                                    <p className={`text-red-500 ${error ? 'block' : 'hidden'}`} >{alert.created_by}</p>
                                </div>
                                <div className="flex flex-col gap-y-2 ">
                                    <label htmlFor="Title" className="dark:text-[#bb86fc]">Title : </label>
                                    <Input value={data.title} type="text" placeholder='Task' id="Title" onChange={(e) => {
                                        setData({
                                            ...data,
                                            title: e.target.value
                                        })
                                    }} />
                                    <p className={`text-red-500 ${error ? 'block' : 'hidden'}`} >{alert.title}</p>

                                </div>
                            </div>
                            <div className="grid gap-x-4 grid-cols-1 w-full">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <label htmlFor="des" className="dark:text-[#bb86fc]">Description : </label>
                                    <textarea value={data.description
                                    } type="date" className="p-1 border-black border-2 rounded-md max-h-20 outline-none" placeholder="" id="des" onChange={(e) => {
                                        setData({
                                            ...data,
                                            description: e.target.value
                                        })
                                    }}></textarea>

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="flex flex-col gap-y-2 ">
                                    <label htmlFor="status" className="dark:text-[#bb86fc]">Status : </label>
                                    <Select id="status" onChange={(e) => {
                                        setData({
                                            ...data,
                                            status: e.target.value
                                        })
                                    }}>
                                        <option selected value="to do">to do</option>
                                        <option value="doing">doing</option>
                                        <option value="done">done</option>
                                    </Select>
                                    <p className={`text-red-500 ${error ? 'block' : 'hidden'}`} >{alert.status}</p>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="Priority" className="dark:text-[#bb86fc]">Priority : </label>
                                    <Select id="Priority" onChange={(e) => {
                                        setData({
                                            ...data,
                                            priority: e.target.value
                                        })
                                    }}>
                                        <option selected value="not important">not important</option>
                                        <option value="important">important</option>
                                    </Select>
                                    <p className={`text-red-500 ${error ? 'block' : 'hidden'}`} >{alert.priority}</p>
                                </div>
                            </div>
                            <div className="grid gap-x-4 grid-cols-1 w-full">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <label htmlFor="Deadline" className="dark:text-[#bb86fc]">Deadline : </label>
                                    <Input value={data.deadline} type="date" className="dark:text-black" id="Deadline" onChange={(e) => {
                                        setData({
                                            ...data,
                                            deadline: e.target.value
                                        })
                                    }} />
                                </div>
                                <p className={`text-red-500 ${error ? 'block' : 'hidden'}`} >{alert.deadline}</p>
                            </div>
                            <div className='flex gap-7'>
                                <Button variant="success" onClick={addTask}>Save
                                    {error && <Alert >Task is not added successfully</Alert>}
                                </Button>
                                <Button variant="danger" onClick={closeForm}>Close</Button>
                            </div>

                        </motion.div>
                    </div>

                }
            </AnimatePresence>

        </>
    )
}

export default AddForm
