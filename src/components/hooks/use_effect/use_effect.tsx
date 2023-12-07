// make an api call using useEffect

import { useEffect, useState } from "react";

type TodoError = {
  message: string;
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const APICall = () => {
  const [todo, setTodo] = useState<Array<Todo | TodoError>>([]);

  const fetchTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      if (response.status !== 200) {
        throw new Error("Unable to fetch todo");
      }

      const payload = (await response.json()) as Todo;

      setTodo([payload]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to fetch todo";

      setTodo([{ message }]);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{JSON.stringify(todo[0])}</p>
    </>
  );
};
