import { type } from '@testing-library/user-event/dist/type'
import React , {useRef} from 'react'
import {v4 as uuid} from 'uuid'
import Todos from './Todos'

export default function TodoInput({userTodos,setTodos}) {
  const userInput = useRef("")
  const userChecked = useRef(false)


  const handleUserInput = (key) => {
    if(key.key === 'Enter' && userInput.current.value !== "") addTodo();
  }

  const addTodo = () => {
    let name = userInput.current.value
    let checked = userChecked.current.checked
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuid(),
        content: name,
        checked: checked
      }]
    });
    <Todos userTodos={userTodos} />
    userInput.current.value = ""
    userChecked.current.checked = false
  }



  return (
    <section className="flex justify-between items-center bg-neutral-700 bg-opacity-30 my-8 py-2">
      <input
        type="checkbox"
        className="ml-4 mr-2"
        ref={userChecked}
      />
      <input
          type="text"
          placeholder='Create a todo...'
          ref={userInput}
          onKeyPress={handleUserInput}
          className="w-full text-[18px] text-white opacity-85 font-medium  bg-transparent -space-y-1 p-4 outline-none border-none rounded"/>
    </section>
  )
}
