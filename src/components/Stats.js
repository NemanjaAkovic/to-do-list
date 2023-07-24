import React from "react";

const Stats = ({ tasks }) => {
  if (!tasks.length) {
    return (
      <p className="stats">
        <em>Start adding some tasks to your list!</em>
      </p>
    );
  }

  const numTasks = tasks.length;
  const numFinished = tasks.filter((task) => task.finished).length;
  const percentage = Math.round((numFinished / numTasks) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've completed everything on your list."
          : `You have ${numTasks} tasks on your list, and you've completed ${numFinished} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
