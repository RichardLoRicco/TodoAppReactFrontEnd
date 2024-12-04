import { SyntheticEvent } from "react";

export interface Todo {
  id: number;
  title: string;
  day?: string;
  month?: string;
  year?: string;
  completed?: boolean;
  description?: string;
}

export type NewTodo = Omit<Todo, 'id'>;

export type UpdatedTodo = Partial<NewTodo> & { id: number };

export interface ContentProps {
  allTodos: Todo[];
  handleAddNewClick: () => void;
  handleCompletionToggle: (event: SyntheticEvent, id: number) => void;
  handleTodoClick: (event: SyntheticEvent, id: number) => void;
  handleDeleteClick: (id :number) => void;
}

export type SelectedTodo = Todo | null;

export interface ModalProps {
  allTodos: Todo[];
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
  selectedTodo: SelectedTodo;
  closeModal: () => void;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTodo: React.Dispatch<React.SetStateAction<SelectedTodo>>;
}