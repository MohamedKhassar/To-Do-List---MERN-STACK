import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Tasks from "./components/pages/Tasks"
import Task from "./components/pages/Task"
import UpdateTask from "./components/pages/UpdateTask"
export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/tasks")
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" exact element={<Tasks />} />
        <Route path="/task/:id" exact element={<Task />} />
        <Route path="/update-task/:id" exact element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  )
}
