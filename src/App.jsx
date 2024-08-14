import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { MyButton } from "./ui/MyButton/MyButton";
import { MyInput } from "./ui/MyInput/MyInput";
import { MySelect } from "./ui/MySelect/MySelect";
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
  // const [todos, setTodos] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const todosQuery = await fetchTodos();
  //       setTodos(todosQuery.result);
  //     } catch (_e) {
  //       setIsError(true);
  //     }

  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  // if (isLoading) {
  //   return <div>Загрузка</div>;
  // }
  return (
    <>
      <MyButton onClick={() => console.log("hello")}>delete</MyButton>
      <MyInput />
      <MySelect
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанию" },
        ]}
        defaultValue={"Сортировка по"}
      />
    </>
  );
}

export default App;
