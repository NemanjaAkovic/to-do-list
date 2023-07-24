import { Fragment, useState } from "react";
import Logo from "./components/Logo";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      )
    );
  };

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?"
    );

    if (confirmed) setTasks([]);
  }

  return (
    <Fragment>
      <Logo />
      <TaskForm onAddTasks={handleAddTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onClearList={handleClearList}
      />
      <Stats tasks={tasks} />
    </Fragment>
  );
};

export default App;
