import React, {useState} from 'react'
import Todos from './Todos'

export default function Controls({userTodos,setTodos}) {
  const toggleId = (id) => {
    const newTodos = [...userTodos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.checked = !todo.checked
    setTodos(newTodos)
  }

  const uncheckedTodos = userTodos.filter((todo) => {
    return todo.checked === false;
  })
  const todoLeft = uncheckedTodos.length

  const clearCompletedTodos = () => {
    const newTodos = userTodos.filter((todo) => {
      return todo.checked === false
    })
    setTodos(newTodos)
  }

  const [allCondition,setAll] = useState(true)
  const [activeCondition,setActive] = useState(false)
  const [completedCondition,setCompleted] = useState(false)

  const STYLE_TRUE = 'text-[red]'
  const STYLE_FALSE = 'text-white'

  const allText = allCondition ? STYLE_TRUE : STYLE_FALSE
  const activeText = activeCondition ? STYLE_TRUE : STYLE_FALSE
  const completedText = completedCondition ? STYLE_TRUE : STYLE_FALSE

  const allTodos = userTodos.filter((todo) => {
      return todo.checked === false || todo.checked === true
  })

  const activeTodos = userTodos.filter((todo) => {
      return todo.checked === false
  })

  const completedTodos = userTodos.filter((todo) => {
    return todo.checked === true
  })


  const showAll = () => {
    setAll(true)
    setActive(false)
    setCompleted(false)
  }


  const showActive = () => {
    setAll(false)
    setActive(true)
    setCompleted(false)
  }

  const showCompleted = () => {
    setAll(false)
    setActive(false)
    setCompleted(true)
  }



  return (
    <>
      {allCondition && <Todos userTodos={allTodos} toggleId={toggleId} />}
      {activeCondition && <Todos userTodos={activeTodos} toggleId={toggleId} />}
      {completedCondition && <Todos userTodos={completedTodos} toggleId={toggleId} />}


      <section className="relative w-full flex justify-between items-center bg-neutral-700 bg-opacity-20 my-8 py-3">

          <span className='text-[14px] text-[12px] text-neutral-600 mx-4'>
            {todoLeft} todos left
          </span>

          <aside className='absolute top-[100%] left-0 w-full flex justify-between bg-neutral-700 bg-opacity-20 my-8 py-3 lg:bg-transparent lg:my-0 lg:py-0 lg:relative lg:top-0 lg:w-max'>
            <button className='text-[14px] text-white mx-4 opacity-50 hover:opacity-100' onClick={showAll}>
              <span className={allText}>All</span>
            </button>
            <button className='text-[14px] text-white mx-4 opacity-50 hover:opacity-100' onClick={showActive}>
            <span className={activeText}>Active</span>
            </button>
            <button className='text-[14px] text-white mx-4 opacity-50 hover:opacity-100' onClick={showCompleted}>
            <span className={completedText}>Completed</span>
            </button>
          </aside>

          <button
            className='text-[14px] text-[#FAEFAE] mx-4 opacity-50 hover:opacity-100'
            onClick={clearCompletedTodos}
          >
            Clear Completed
          </button>

      </section>
    </>
  )
}
