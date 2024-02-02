import { IoMdHand } from "react-icons/io";
import AddForm from "../AddForm";
import { RxReset } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios"
import TaskCards from "../design-system/TaskCard";
import Alert from "../design-system/Alert";
import Select from "../design-system/Select";
import Button from "../design-system/Button";
const Tasks = () => {
  const [tasks, setTasks] = useState();
  const [error, setError] = useState();
  const [query, setQuery] = useState({
    status: "",
    priority: "",
  });

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/tasks")
      setTasks(res.data)
      setQuery({
        status: "",
        priority: "",
      })
      // console.log(tasks)
    } catch (error) {
      setError("nothing found")
      console.log(error.request.statusText)
    }
  }

  const doneTask = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/tasks/${id}`, { status: "done" }).then(
        getData()
      )

    } catch (error) {
      console.log(error)
    }
  }
  const softDelete = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/delete/tasks/${id}`).then(
        getData()
      )
    } catch (error) {
      console.log(error)
    }
  }


  const filterDataByStatus = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/tasks/status?status=${query.status}`)
      setTasks(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const filterDataByPriority = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/tasks/priority?priority=${query.priority}`)
      setTasks(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
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
        <div onClick={getData} className="capitalize rounded-full p-2 text-black text-sm bg-[#BB86FC] dark:text-white">
          <RxReset size={22} />
        </div>
      </div>
      <div className="grid gap-y-8 justify-center mt-20">
        {tasks ? tasks.map(task =>
          <TaskCards id={task._id} doneTask={() => doneTask(task._id)} softDelete={() => softDelete(task._id)} key={task._id} title={task.title} priority={task.priority} status={task.status} />
        ) : <Alert duration={10000}>{error}</Alert>}
      </div>
    </div>
  )
}

export default Tasks
