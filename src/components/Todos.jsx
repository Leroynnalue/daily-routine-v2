import React from 'react'
import Todo from './Todo'

export default function Todos( {userTodos , toggleId} ) {
    return (
      <section className='flex flex-col-reverse'>
        {userTodos.map((todo) => {
        return <Todo todo={todo} toggleId={toggleId} />
        })}
      </section>
    )
}
