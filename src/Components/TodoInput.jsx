import { useState } from "react"
import { addTodo } from "../Features/todoSlice"
import { useDispatch } from "react-redux"

const TodoInput = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const add = (e) => {
    e.preventDefault()
    if(!input) return
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={add} className="inset-shadow-sm w-full bg-gray-200/70 rounded-lg flex justify-between">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type you todo here" type="text" className="text-sm w-full px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400" />
      <button type="submit" className="inset-shadow-sm text-sm py-3 px-3 text-center bg-green-400 cursor-pointer hover:bg-green-400/70 transition ease-in-out duration-200 font-semibold text-white rounded-r-lg">Add</button>
    </form>
  )
}

export default TodoInput
