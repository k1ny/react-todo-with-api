import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { MyButton } from "./ui/MyButton/MyButton";
import { TodoList } from "./components/todoList/todoList";
import { Filter } from "./components/filter/Filter";
import { Modal } from "./components/modal/Modal";
import { CreateForm } from "./components/createForm/CreateForm";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const url = "http://localhost:5173/api";

async function fetchTodos() {
  await delay(500);
  const response = await fetch(url + "/todos", {
    method: "GET",
    credentials: "include",
    headers: { Accept: "application/json" },
  });
  return await response.json();
}

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
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

  const onChangeSort = (value) => {
    setSortQuery(value);
  };
  const sortedTodos = sortQuery
    ? [...todos].sort((a, b) => a[sortQuery].localeCompare(b[sortQuery]))
    : todos;

  const onChangeSearch = (value) => {
    setSearchQuery(value);
  };
  const searchedTodos = sortedTodos.filter((todo) => {
    console.log(todo.text);
    return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div>
        <MyButton
          onClick={(e) => {
            e.stopPropagation();
            setCreateFormOpen(true);
          }}
        >
          Create
        </MyButton>
      </div>
      <Filter onChangeSearch={onChangeSearch} onChangeSort={onChangeSort} />
      <TodoList todos={searchedTodos} />

      <Modal
        isOpen={isCreateFormOpen}
        handleClose={() => setCreateFormOpen(false)}
      >
        <CreateForm />
      </Modal>
    </>
  );
}

export default App;
