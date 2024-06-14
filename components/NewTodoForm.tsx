import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" />
        <button type="submit"className='bg-green-500 px-4 py-2 rounded-lg'>submit again</button>
      </form>
    </div>
  )
}

export default NewTodoForm
