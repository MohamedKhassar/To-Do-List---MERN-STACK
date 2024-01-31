import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdHand } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
const Tasks = () => {
  const [isDisplay, setIsDisplay] = useState(false)
  return (
    <div className="m-14">
      <h1 className="dark:text-[#BB86FC] text-black text-3xl font-[Exo] text-center capitalize flex justify-center gap-x-4">welcome to <span className="bg-gradient-to-r from-violet-400 to-violet-500 text-transparent bg-clip-text underline decoration-wavy dark:decoration-white decoration-black underline-offset-8"> MasterTask</span> <IoMdHand fill="orange" /></h1>
      <div className="flex justify-center items-center">
        <div onClick={() => setIsDisplay(true)} className="flex justify-center mt-28 bg-[#BB86FC] w-fit rounded-full p-1 cursor-pointer">
          <IoAdd size={40} className="dark:text-white" />
        </div>
      </div>
      <AnimatePresence>
        {/* update PUPUP */}
        {isDisplay &&
          <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000099] flex items-center justify-center'>
            <motion.div
              className="home-card w-auto p-16 h-auto bg-white rounded relative flex flex-col items-center justify-center gap-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: "0.5" }}
            >
              <h1 className='text-2xl font-[Poppins] font-bold'>UPDATE TASK</h1>
              <input type="text" className='border-b-2 border-black w-72 h-10 pl-2 outline-none focus:border-blue-600 duration-700' placeholder='Enter Your Name' />
              <input type="text" className='border-b-2 border-black w-72 h-10 pl-2 outline-none focus:border-blue-600 duration-700' placeholder='Task' />
              <div className='flex gap-7'>
                <button className=' w-28 h-10 rounded bg-black text-white font-[Poppins] hover:scale-105 duration-500'>UPDATE</button>
                <button onClick={() => setIsDisplay(false)} className='w-28 h-10 rounded bg-red-600 text-white font-[Poppins] hover:scale-105 duration-500'>Close</button>
              </div>

            </motion.div>
          </div>

        }
      </AnimatePresence>
    </div>
  )
}

export default Tasks
