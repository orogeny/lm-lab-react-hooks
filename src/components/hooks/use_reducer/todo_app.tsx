import { useState } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: crypto.randomUUID(), text: "Visit Kafka Museum", done: true },
  { id: crypto.randomUUID(), text: "Watch a puppet show", done: false },
  { id: crypto.randomUUID(), text: "Lennon Wall pic", done: false },
];

export function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(updatedTask: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === updatedTask.id) {
          return updatedTask;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
