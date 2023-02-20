import React, { useState } from "react";
import RegisterTask from "../forms/RegisterTask";
import Task from "../pure/Task";
import '../../styles/ListTask.css';

function ListTask() {
  const [tasks, setTasks] = useState([]);

  function createTask(obj) {
    setTasks([...tasks, obj]);
  }

  function removeTask(task) {
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  return (
    <div className="main-container">
      <RegisterTask createTask={createTask} />

      <div className="container-task">
        {tasks.map((task, index) => {
          return <Task key={index} task={task} removeTask={removeTask} />;
        })}
      </div>
    </div>
  );
}

export default ListTask;
