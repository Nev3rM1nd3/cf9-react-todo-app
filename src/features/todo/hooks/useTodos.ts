import {useState} from "react";
import type {Todo} from "../types.ts";

// STATE Todos
// [
//  {id: 2314, text: text1, completed: false},
//  {id: 5322, text: text2, completed: true},
//  {id: 2341, text: text3, completed: false},
// ]
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos(prev => [
      ...prev,
      {id: Date.now(), text: text, completed: false},
    ])
  }

  const deleteTodo = (id: number) => {
    setTodos(
      prev => prev.filter(todo => todo.id !== id)
    )
  }

  const editTodo = (id: number, newText: string) => {
     setTodos(prev =>
       prev.map( todo =>
         todo.id === id ? {...todo, text: newText} : todo
       )
     )
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map( todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )

  }

  const clearAll = () => {
    setTodos([]);
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    clearAll,
  }
}