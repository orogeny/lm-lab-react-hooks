// make an api call using useEffect

import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const APICall = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((payload) => setTodo([payload]));
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
};
