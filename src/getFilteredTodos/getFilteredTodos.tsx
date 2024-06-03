import { Status } from '../types/Status';
import { Todo } from '../types/Todo';

export const getFilteredTodos = (todos: Todo[], status: Status): Todo[] => {
  switch (status) {
    case Status.Active:
      return todos.filter(todo => !todo.completed);
    case Status.Completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
