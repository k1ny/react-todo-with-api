import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { MyButton } from "./ui/MyButton/MyButton";
import { TodoList } from "./components/todoList/TodoList";
import { Filter } from "./components/filter/Filter";
import { Modal } from "./components/modal/Modal";
import { CreateForm } from "./components/createForm/CreateForm";
import { createTodo, fetchTodos, patchTodo } from "./apiFetches";
import { deleteTodo } from "./apiFetches";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateFormOpen, setCreateFormOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const todosQuery = await fetchTodos();
        setTodos(todosQuery.result);
      } catch (_e) {
        setIsError(true);
      }

      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Undefined error</div>;
  }

  const sortedTodos = todos.toSorted((a) => (a.completed ? 1 : -1));

  const onChangeSearch = (value) => {
    setSearchQuery(value);
  };
  const searchedTodos = sortedTodos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const removeTodo = async (id) => {
    await deleteTodo(id);
    const todosQuery = await fetchTodos();
    setTodos(todosQuery.result);
  };

  const handleUpdateTodo = async (id, payload) => {
    setTodos(
      todos.map((todo) => (todo._id === id ? { ...todo, ...payload } : todo)),
    );
    await patchTodo(id, payload);
  };

  const handleCreateTodo = async (payload) => {
    const todoMutation = await createTodo(payload);
    setTodos([...todos, todoMutation.result]);
    setCreateFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Filter onChangeSearch={onChangeSearch} />

        <MyButton
          onClick={(e) => {
            e.stopPropagation();
            setCreateFormOpen(true);
          }}
        >
          Create
        </MyButton>
      </div>
      <TodoList
        todos={searchedTodos}
        remove={removeTodo}
        handleUpdateTodo={handleUpdateTodo}
      />

      <Modal
        isOpen={isCreateFormOpen}
        handleClose={() => setCreateFormOpen(false)}
      >
        <CreateForm handleCreateTodo={handleCreateTodo} />
      </Modal>
    </div>
  );
}

export default App;
