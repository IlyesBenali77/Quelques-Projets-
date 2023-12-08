// eslint-disable jsx-a11y/label-has-associated-control
"use client";
import React, { useState } from "react";

const MySexyTodoPage: React.FC = () => {
  interface Task {
    id: number;
    name: string;
    isCompleted: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Commencer les décorations de Noël", isCompleted: true },
    { id: 2, name: "Ranger le bureau", isCompleted: true },
    { id: 3, name: "Acheter du café", isCompleted: true },
  ]);

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const inProgressTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <div>
      <h1>Ma liste de tâches</h1>
      <div>
        <h3>En cours</h3>
        {inProgressTasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={!task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.name}</span>
          </div>
        ))}
      </div>
      <div>
        <h3>Terminées</h3>
        {completedTasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySexyTodoPage;
