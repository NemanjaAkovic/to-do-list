import React from "react";

const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {
  const handleToggle = () => {
    onToggleTask(task.id);
  };

  return (
    <li>
      <input type="checkbox" checked={task.finished} onChange={handleToggle} />
      <span style={task.finished ? { textDecoration: "line-through" } : {}}>
        {task.name}
      </span>
      {!task.finished && (
        <>
          <div className="task-details">
            {task.description} {task.date}
          </div>
          <button onClick={() => onDeleteTask(task.id)}>❌</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
