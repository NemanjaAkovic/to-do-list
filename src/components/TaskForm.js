import React, { Fragment, useState } from "react";

const TaskForm = ({ onAddTasks }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newTask = {
      name,
      description,
      date,
      finished: false,
      id: Date.now(),
    };

    onAddTasks(newTask);

    setName("");
    setDescription("");
    setDate("");
  }

  return (
    <Fragment>
      <h3 className="add-form">Write your to-do list elements here:</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </Fragment>
  );
};

export default TaskForm;
