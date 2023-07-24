import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onToggleTask, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedTasks;

  if (sortBy === "input") sortedTasks = tasks;

  if (sortBy === "name")
    sortedTasks = tasks.slice().sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy === "finished")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.finished) - Number(b.finished));

  return (
    <div className="list">
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={task.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="name">Sort by name</option>
          <option value="finished">Sort by status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default TaskList;
