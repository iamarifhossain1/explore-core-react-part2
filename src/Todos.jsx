import { use } from "react"
import Todo from "./Todo";

export default function Todos({todosPromise}) {
    const todos = use(todosPromise)
    console.log(todos);
    
    return(
        <div className="users">
            <h3>Todos: {todos.length}</h3>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    )
}