import React, { useState } from "react";
import RegisterTask from "../forms/RegisterTask";
import Task from "../pure/Task";

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

  console.log(tasks);

  return (
    <>
      <RegisterTask createTask={createTask} />

      {tasks.map((task, index) => {
        return <Task key={index} task={task} removeTask={removeTask} />;
      })}
    </>
  );
}

export default ListTask;
