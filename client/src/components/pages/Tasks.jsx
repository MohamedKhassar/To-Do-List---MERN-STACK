import { IoMdHand } from "react-icons/io";
import AddForm from "../AddForm";

const Tasks = () => {

  return (
    <div className="m-14">
      <h1 className="dark:text-[#bb86fc] select-none text-black text-3xl font-[Exo] text-center capitalize flex justify-center gap-x-4">welcome to <span className="bg-gradient-to-r from-violet-400 to-violet-500 text-transparent bg-clip-text underline decoration-wavy dark:decoration-white decoration-black underline-offset-8"> MasterTask</span> <IoMdHand fill="orange" /></h1>
      <AddForm />
    </div>
  )
}

export default Tasks
