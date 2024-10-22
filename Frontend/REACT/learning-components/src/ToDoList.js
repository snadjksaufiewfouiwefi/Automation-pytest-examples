function ToDoList ({ todos}) {//  todos -> [{},{}]
   //const todoItems = todos.map((todo) => {})
   return <ul>{todos.map((todo, index) => <li key = {index}>{todo}</li>)}</ul>
}

export default ToDoList;