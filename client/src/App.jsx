import Tasks from "./components/pages/Tasks"
import Task from "./components/pages/Task"
import UpdateTask from "./components/pages/UpdateTask"
import { Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function App() {
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    const NavigatePage = () => {
      switch (location.pathname) {
        case "/":
          return navigate("/tasks")
      }
    }
    NavigatePage()
  })
  return (

    <Routes>
      < Route path="/tasks" exact element={< Tasks />} />
      < Route path="/task/:id" exact element={< Task />} />
      < Route path="/update-task/:id" exact element={< UpdateTask />} />
    </Routes>



  )
}
