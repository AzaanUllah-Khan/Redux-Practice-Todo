import { TrashIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"

const TodoItems = () => {
    const todos = useSelector(state=>state.todos)

    return (
        <div className="mt-5 flex flex-col w-full justify-center intems-center gap-y-3">
            <div className="w-full inset-shadow-sm bg-gray-200/70 rounded-lg flex justify-start gap-4">
                <button className="hover:bg-red-400/90 transition ease-in-out cursor-pointer bg-red-400 rounded-s-lg py-2 px-3 text-white"><TrashIcon className="size-5" /></button>
                <h1 className="self-center text-gray-600 font-semibold">Azaan</h1>
            </div>
        </div>
    )
}

export default TodoItems
