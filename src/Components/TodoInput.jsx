const TodoInput = () => {
  return (
    <div className="inset-shadow-sm w-full bg-gray-200/70 rounded-lg flex justify-between">
      <input type="text" className="text-sm w-full px-4 py-3 outline-none"/>
      <button className="inset-shadow-sm text-sm py-3 px-3 text-center bg-green-400 cursor-pointer hover:bg-green-400/70 transition ease-in-out duration-200 font-semibold text-white rounded-r-lg">Add</button>
    </div>
  )
}

export default TodoInput
