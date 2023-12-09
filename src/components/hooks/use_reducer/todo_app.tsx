import { useReducer } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

type ActionType =
  | {
      type: "ADD_TASK";
      text: string;
    }
  | {
      type: "UPDATE_TASK";
      updatedTask: Task;
    }
  | {
      type: "DELETE_TASK";
      taskId: string;
    };

const initialTasks: Task[] = [
  { id: crypto.randomUUID(), text: "Visit Kafka Museum", done: true },
  { id: crypto.randomUUID(), text: "Watch a puppet show", done: false },
  { id: crypto.randomUUID(), text: "Lennon Wall pic", done: false },
];

function reducer(tasks: Task[], action: ActionType) {
  if (action.type === "ADD_TASK") {
    console.log("Add task: ", action.text);

    return [
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: action.text,
        done: false,
      },
    ];
  }

  if (action.type === "UPDATE_TASK") {
    console.log("Update task: ", action.updatedTask.id);

    return tasks.map((t) =>
      t.id === action.updatedTask.id ? action.updatedTask : t
    );
  }

  if (action.type === "DELETE_TASK") {
    console.log("Delete task: ", action.taskId);

    return tasks.filter((t) => t.id !== action.taskId);
  }

  console.error(`Unknown action: ${action}`);
  return tasks;
}

export function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({ type: "ADD_TASK", text });
  }

  function handleChangeTask(updatedTask: Task) {
    dispatch({ type: "UPDATE_TASK", updatedTask });
  }

  function handleDeleteTask(taskId: string) {
    dispatch({ type: "DELETE_TASK", taskId });
  }

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
