import { Todo } from "./types";

export const sortTodosByCompletion = (allTodos: Todo[]): Todo[] => {
  return allTodos.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });
}

export const findTodo = (allTodos: Todo[], todoId: number): Todo => {
  return allTodos.find(todo => todo.id === todoId)!;
} 

export const displayDueDate = (todo: Todo) => {
  const month = todo.month;
  const year = todo.year;

  if (month === '  ' || year === '    ' || !month || !year) {
    return "No Due Date";
  } else {
    return `${month}/${year.slice(-2)}`;
  }
}

export const validateDay = (day: string): string => {
  return Number(day) ? day : '  ';
}

export const validateMonth = (month: string): string => {
  return Number(month) ? month : '  ';
}

export const validateYear = (year: string): string => {
  return Number(year) ? year : '    ';
}

export const validTitle = (title: string): boolean => {
  return title.length >= 3;
}