import { IoMdHand } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import AddForm from "../AddForm";
import { useEffect, useState } from "react";
import axios from "axios"
import TaskCards from "../design-system/TaskCard";
import Alert from "../design-system/Alert";
const Tasks = () => {
  const [tasks, setTasks] = useState();
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/tasks")
      setTasks(res.data)
    } catch (error) {
      setError("nothing found")
      console.log(error.request.statusText)
    }
  }
  useEffect(() => {
    getData()
  })

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

  return (
    <div className="m-14">
      <h1 className="dark:text-[#bb86fc] select-none text-black text-3xl font-[Exo] text-center capitalize flex justify-center gap-x-4">welcome to <span className="bg-gradient-to-r from-violet-400 to-violet-500 text-transparent bg-clip-text underline decoration-wavy dark:decoration-white decoration-black underline-offset-8"> MasterTask</span> <IoMdHand fill="orange" /></h1>
      <AddForm />
      <div className="grid justify-center mt-20">
        {tasks ? tasks.map(task =>
          <TaskCards doneTask={() => doneTask(task._id)} softDelete={() => softDelete(task._id)} key={task._id} title={task.title} priority={task.priority} status={task.status} />
        ) : <Alert duration={10000}>{error}</Alert>}
      </div>
    </div>
  )
}

export default Tasks
