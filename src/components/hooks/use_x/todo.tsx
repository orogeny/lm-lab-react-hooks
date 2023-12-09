import { useTodo } from "./use_todo";

export const Todo = () => {
  const { isFetching, data } = useTodo("/todos/12");

  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};
