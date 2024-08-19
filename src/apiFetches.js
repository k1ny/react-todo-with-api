const url = "http://localhost:5173/api";

export async function createTodo(payload) {
  const response = await fetch(url + "/todos", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
