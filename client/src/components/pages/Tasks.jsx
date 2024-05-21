import { IoMdHand } from "react-icons/io";
import AddForm from "../AddForm";
import { RxReset } from "react-icons/rx";
import { useState } from "react";
import TaskCards from "../design-system/TaskCard";
import loader from "../../assets/loader.gif"
import Select from "../design-system/Select";
import Button from "../design-system/Button";
import useFetch from "../../hooks/useFetch";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Tasks = () => {
  const [url, setUrl] = useState("http://localhost:8080/api/tasks");
  const navigate = useNavigate()
  const [method, setMethod] = useState();
  const [newData, setNewData] = useState();
  const [tasks, loading] = useFetch(url, method, newData);
  const [query, setQuery] = useState({
    status: "",
    priority: "",
  });

  const showTask = (id) => {
    navigate(`/task/${id}`)
  }

  const doneTask = async (id) => {
    try {
      setMethod("PUT")
      setUrl(`http://localhost:8080/api/tasks/${id}`)
      setNewData({ status: "done" })
    } catch (error) {
      console.log(error)
    }
  }
  const softDelete = async (id) => {
    try {
      setMethod("PUT")
      setUrl(`http://localhost:8080/api/delete/tasks/${id}`)
      setNewData({
        delete_at: new Date().toISOString(),
      })

    } catch (error) {
      console.log(error)
    }
  }


  const filterDataByStatus = () => {
    try {
      setMethod("GET")
      setUrl(`http://localhost:8080/api/tasks/status?status=${query.status}`)
    } catch (error) {
      console.log(error)
    }
  }
  const filterDataByPriority = () => {
    try {
      setMethod("GET")
      setUrl(`http://localhost:8080/api/tasks/priority?priority=${query.priority}`)
    } catch (error) {
      console.log(error)
    }
  }

  const reset = () => {
    setMethod("GET")
    setUrl("http://localhost:8080/api/tasks")
    setQuery({
      status: "",
      priority: "",
    })
  }
  const trash = () => {
    setMethod("GET")
    setUrl("http://localhost:8080/api/tasks/trash")
    setQuery({
      status: "",
      priority: "",
    })
  }

  return (
    <div>
      <div className="m-14">
        <h1 className="dark:text-[#bb86fc] select-none text-black text-3xl font-[Exo] text-center capitalize flex justify-center gap-x-4">welcome to <span className="bg-gradient-to-r from-violet-400 to-violet-500 text-transparent bg-clip-text underline decoration-wavy dark:decoration-white decoration-black underline-offset-8"> MasterTask</span> <IoMdHand fill="orange" /></h1>
        <AddForm />
        <div className="mt-20 flex justify-center items-end">
          <div className="flex flex-col gap-y-4">
            <h1 className="capitalize dark:text-[#BB86FC]">status</h1>
            <div className=" grid gap-x-3 grid-cols-2">

              <Select onChange={(e) => { setQuery({ ...query, priority: "", status: e.target.value }) }}>
                <option value="to do">to do</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
              </Select>
              {query.status && <Button variant="primary" className="w-1/2" onClick={filterDataByStatus}>filter</Button>}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="capitalize dark:text-[#BB86FC]">priority</h1>
            <div className=" grid gap-x-3 grid-cols-2">
              <Select onChange={(e) => { setQuery({ ...query, status: "", priority: e.target.value }) }}>
                <option value="important">important</option>
                <option value="not important">not important</option>
              </Select>
              {query.priority && <Button variant="primary" className="w-1/2" onClick={filterDataByPriority}>filter</Button>}
            </div>
          </div>
          <div className="flex gap-x-8">
            <div onClick={trash} onMouseLeave={() => { document.getElementById("trash").style.opacity = "0" }} onMouseEnter={() => { document.getElementById("trash").style.opacity = "1" }} className="flex justify-center relative capitalize rounded-full p-2 text-red-500 text-sm bg-[#BB86FC] dark:text-white" >
              <span id="trash" className="absolute -top-12 opacity-0 duration-300 bg-slate-700 p-2 rounded-md text-white">trash</span>
              <FaTrash size={22} />
            </div>
            <div onClick={reset} onMouseLeave={() => { document.getElementById("reset").style.opacity = "0" }} onMouseEnter={() => { document.getElementById("reset").style.opacity = "1" }} className="flex justify-center relative capitalize rounded-full p-2 text-black text-sm bg-[#BB86FC] dark:text-white">
              <span id="reset" className="absolute -top-12 opacity-0 duration-300 bg-slate-700 p-2 rounded-md text-white">reset</span>
              <RxReset size={22} />
            </div>
          </div>
        </div>
        <div className="grid gap-y-8 justify-center mt-20">
          {!loading && tasks ? tasks.map(task =>
            <TaskCards showTask={() => showTask(task._id)} id={task._id} doneTask={() => doneTask(task._id)} softDelete={() => softDelete(task._id)} key={task._id} title={task.title} priority={task.priority} status={task.status} />
          ) : <img src={loader} alt="" />}
        </div>

      </div>
    </div>
  )
}

export default Tasks
