import TodoInput from "./Components/TodoInput"
import TodoItems from "./Components/TodoItems"

const App = () => {
  return (
    <div className="p-5 flex justify-center items-center w-full min-h-screen bg-gray-200/70">
      <div className="w-full max-w-xl bg-white shadow-md shadow-gray-200/50 p-5 rounded-lg">
      <TodoInput/>
      <TodoItems />
      </div>
    </div>
  )
}

export default App