const url = "/api";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function fetchTodos() {
  await delay(500);
  const response = await fetch(url + "/todos", {
    method: "GET",
    credentials: "include",
    headers: { Accept: "application/json" },
  });
  return await response.json();
}

export async function createTodo(payload) {
  const response = await fetch(url + "/todos", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(url + "/todos/" + String(id), {
    method: "DELETE",
    credentials: "include",
  });
  return await response.json();
}

export async function patchTodo(id, payload) {
  const response = await fetch(url + "/todos/" + String(id), {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
