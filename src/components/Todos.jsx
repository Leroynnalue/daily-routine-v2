import React from 'react'
import Todo from './Todo'

export default function Todos( {userTodos , toggleId} ) {
    return (
      <section className='flex flex-col-reverse'>
        {userTodos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleId={toggleId} />
        })}
      </section>
    )
}
