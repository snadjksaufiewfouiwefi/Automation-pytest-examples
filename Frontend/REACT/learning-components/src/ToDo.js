import{useState} from 'react';
import ToDoList from './ToDoList';

function ToDo() {
   
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    return (
        <div>
        <input type='text' placeholder="new todo.."
        onChange={(event) => setNewTodo(event.target.value)}/>
        <br/>
        <button onClick ={() => todos.push([...todos, newTodo] )}>Add todo</button>
         <ToDoList todos = {todos}/>
        </div>
    );
}
export default App;