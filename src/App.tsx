import "./stylesheets/reset.css";
import "./stylesheets/todo_v2.css";
import { useState, useEffect, SyntheticEvent } from "react";
import todoService from "./services/todoService";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import { findTodo } from "./utils";

import { Todo, SelectedTodo } from "./types";

const App = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<SelectedTodo>(null);

  useEffect(() => {
    todoService.getAllTodos().then((data) => {
      setAllTodos(data);
    });
  }, []);

  const handleAddNewClick = () => {
    setSelectedTodo(null);
    setModalStatus(true);
  };

  const handleTodoClick = (event: SyntheticEvent, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedTodo(findTodo(allTodos, id));
    setModalStatus(true);
  };

  const handleCompletionToggle = (_event: SyntheticEvent, id: number) => {
    const todo = allTodos.find((todo) => todo.id === id)!;
    const changedTodo: Todo = { ...todo, completed: !todo.completed };
    todoService
      .updateTodo(changedTodo)
      .then((returnedTodo) => {
        setAllTodos(
          allTodos.map((todo) => (todo.id === id ? returnedTodo : todo))
        );
      })
      .catch((error) => console.error("Failed to update todo:", error));
  };

  const handleDeleteClick = (id: number) => {
    todoService
      .deleteTodo(id)
      .then(() => {
        setAllTodos(allTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("Failed to delete todo:", error));
  };

  const closeModal = () => {
    setModalStatus(false);
    setSelectedTodo(null);
  };

  return (
    <div>
      <Sidebar />
      <div id="items">
        <h1>All todos</h1>
        <Content
          allTodos={allTodos}
          handleAddNewClick={handleAddNewClick}
          handleCompletionToggle={handleCompletionToggle}
          handleTodoClick={handleTodoClick}
          handleDeleteClick={handleDeleteClick}
        />

        {modalStatus && (
          <Modal
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            selectedTodo={selectedTodo}
            closeModal={closeModal}
            setModalStatus={setModalStatus}
            setSelectedTodo={setSelectedTodo}
          />
        )}
      </div>
    </div>
  );
};

export default App;
