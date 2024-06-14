
import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async ()=>{
 await new Promise <void> ((resolve)=>setTimeout(()=>resolve(),5000))


   const todos = await db.todo.findMany({})
   return todos
}


const TodosPage = async () => {
  const todos = await getData()
  return (
    <>
    
    <div>
      <TodoList todos={todos}/>
    </div>
    <div>
      
    </div>
    </>
    
  )
}

export default TodosPage
