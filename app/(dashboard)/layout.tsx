import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>{children}</div>
      
      <div>
        <NewTodoForm />
      </div>
    </div>
  )
}

export default DashboardLayout
