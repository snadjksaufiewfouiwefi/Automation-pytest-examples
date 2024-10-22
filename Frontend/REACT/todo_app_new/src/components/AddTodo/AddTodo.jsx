import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
    const [dispatch] = useContext(TodoContext);
    const [todoText, setTodoText] = useState('');

    function AddTodo(todoText) {
       dispatch({type: 'add_todo', payload: {todoText}})
         
    }
    return (
        <>
            <input 
            placeholder="add your next todo..."
                onChange={(e) => setTodoText(e.target.value)}
                value = {todoText}
            />
            <button onClick={() => {
               AddTodo(todoText)
                setTodoText('');
            }}>submit</button>
        </>
    )
}

export default AddTodo;