import { ContentProps } from "../types";
import { sortTodosByCompletion, displayDueDate } from "../utils";


const Content = ({ allTodos, handleAddNewClick, handleCompletionToggle , handleTodoClick, handleDeleteClick }: ContentProps) => {
  return (
    <>
      <h2>Todos</h2>
      <main>
        <label htmlFor="new_item" onClick={handleAddNewClick}>
          <img src="images/plus.png" alt="Add Todo Item" />
          <h2>Add new to do</h2>
        </label>

        <table cellSpacing="0">
          <tbody>
            {sortTodosByCompletion(allTodos).map(todo => (
              <tr key={todo.id} data-id={todo.id} >
                <td className="list_item" onClick={(event) => handleCompletionToggle(event, todo.id)}>
                  <input type="checkbox" name={`item_${todo.id}`} id={`item_${todo.id}`} checked={todo.completed}
                  onChange={() => console.log("This shouldn't happen")}
                  />
                <span className="check"></span>
                <label htmlFor={`item_${todo.id}`} onClick={(event) => handleTodoClick(event, todo.id)}>{todo.title} - {displayDueDate(todo)}</label></td>
                <td className="delete" onClick={() => handleDeleteClick(todo.id)} ><img src="images/trash.png" alt="Delete" /></td>
            </tr>
          ))}
          </tbody>
      </table>
      </main>
    </>
  )
}

export default Content;