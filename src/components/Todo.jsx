import React from 'react'

export default function Todo({todo,toggleId}) {
  function handleChange() {
    toggleId(todo.id)
  }

  let todoChecked = todo.checked ? 'line-through italic opacity-60' : 'nounderline'

  return (
    <section className="flex justify-between items-center bg-neutral-700 bg-opacity-30 my-1">
      <input
        type="checkbox"
        className="ml-4 mr-2"
        checked={todo.checked}
        onChange={handleChange}
      />
      <div className='w-full text-[18px] text-white opacity-80 font-medium bg-transparent -space-y-1 p-4 cursor-pointer rounded hover:italic'>
        <p className={todoChecked}>{todo.content}</p>
      </div>
    </section>
  )
}
