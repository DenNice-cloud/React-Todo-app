import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Todo } from '../types/Todo';
import { ErrorMessages } from '../types/ErrorMessages';
import { Status } from '../types/Status';
import { wait } from '../utils/fetchClient';
import { deleteTodo, getTodos } from '../api/todos';

export type TodosContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  tempTodo: Todo | null;
  setTempTodo: Dispatch<SetStateAction<Todo | null>>;
  errorMessage: ErrorMessages | string;
  setErrorMessage: Dispatch<SetStateAction<ErrorMessages | string>>;
  status: Status;
  setStatus: (value: Status) => void;
  handleError: (value: string) => void;
  query: string;
  setQuery: (value: string) => void;
  handleDeleteTodo: (ItemId: number) => void;
  processingIds: number[];
  setProcessingIds: React.Dispatch<React.SetStateAction<number[]>>;
};

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined,
);

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error('useTodosContext outside the TodosProvider access scope');
  }

  return context;
};

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages | string>('');
  const [status, setStatus] = useState<Status>(Status.All);
  const [tempTodo, setTempTodo] = useState<Todo | null>(null);
  const [query, setQuery] = useState<string>('');

  const [processingIds, setProcessingIds] = useState<number[]>([]);

  const handleError = (message: string) => {
    setErrorMessage(message);

    return wait(3000).then(() => setErrorMessage(''));
  };

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => {
        handleError(ErrorMessages.LoadTodos);
      });
  }, []);

  const handleDeleteTodo = (ItemId: number) => {
    setProcessingIds(prevState => [...prevState, ItemId]);

    deleteTodo(ItemId)
      .then(() => {
        setTodos(prevTodos => prevTodos.filter(values => values.id !== ItemId));
      })
      .catch(() => {
        handleError(ErrorMessages.DeleteTodo);
      })
      .finally(() => {
        setProcessingIds(prevState =>
          prevState.filter(element => element !== ItemId),
        );
      });
  };

  const value = {
    tempTodo,
    setTempTodo,
    handleError,
    todos,
    setTodos,
    errorMessage,
    setErrorMessage,
    status,
    setStatus,
    query,
    setQuery,
    handleDeleteTodo,
    processingIds,
    setProcessingIds,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
