import React from 'react'
import { motion } from 'framer-motion'

export default function Todo({todo,toggleId}) {
  function handleChange() {
    toggleId(todo.id)
  }

  let todoChecked = todo.checked ? 'line-through italic opacity-60' : 'nounderline'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ease: "easeOut", duration: 1 }}
      exit={{ opacity: 1 }}
      
      className="flex justify-between items-center bg-neutral-700 bg-opacity-30 my-1 animate__animated animate__bounce animate__delay-2s">
      <input
        type="checkbox"
        className="ml-4 mr-2"
        checked={todo.checked}
        onChange={handleChange}
      />
      <div className='w-full text-[18px] text-white opacity-80 font-medium bg-transparent -space-y-1 p-4 cursor-pointer rounded hover:italic'>
        <p className={todoChecked}>{todo.content}</p>
      </div>
    </motion.section>
  )
}
