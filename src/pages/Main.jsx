import React,{useState,useEffect} from 'react'

import Nav from '../components/Nav'
import TodoInput from '../components/TodoInput'
import Controls from '../components/Controls'
import Creator from '../components/Creator'

export default function Main() {
  const LOCAL_STORAGE_KEY = "REACT_TODO_LIST"
  const [userTodos,setTodos] = useState([
    {
      id: 1,
      content: "Follow Me On Instagram",
      checked: false,
    },
    {
      id: 2,
      content: "Say Hi",
      checked: false,
    }
  ])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userTodos))
  }, [userTodos])

  return (
    <main className="flex flex-col justify-between">
        <Nav />
        <TodoInput userTodos={userTodos} setTodos={setTodos} />
        <Controls userTodos={userTodos} setTodos={setTodos} />
        <Creator />
    </main>
  )
}
